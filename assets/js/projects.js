/**
 * Projects Management - GitHub API Integration
 * Portfolio Professionnel - MithrandirEa
 * 
 * Gère la récupération et l'affichage des projets depuis l'API GitHub
 */

(function() {
  'use strict';

  /* ========================================
     CONFIGURATION
     ======================================== */

  const CONFIG = {
    // GitHub username
    username: 'MithrandirEa',
    
    // API endpoint
    apiBaseUrl: 'https://api.github.com',
    
    // Paramètres de requête
    repoParams: {
      sort: 'updated',        // Trier par date de mise à jour
      per_page: 30,           // Nombre max de repos à récupérer
      type: 'owner'           // Seulement les repos dont on est propriétaire (exclut les forks par défaut)
    },
    
    // Cache localStorage
    cacheKey: 'github_repos_cache',
    cacheExpiration: 1000 * 60 * 60, // 1 heure en millisecondes
    
    // Options de filtrage
    filters: {
      excludeForks: true,     // Exclure les forks
      excludeArchived: true,  // Exclure les repos archivés
      minStars: 0,            // Nombre minimum d'étoiles
      languages: []           // Langages à inclure (vide = tous)
    }
  };

  /* ========================================
     ÉTAT DE L'APPLICATION
     ======================================== */

  let state = {
    repos: [],              // Tous les repos récupérés
    filteredRepos: [],      // Repos après filtrage
    currentFilter: 'all',   // Filtre actif
    activeLanguage: 'all',  // Langage actif pour le filtre
    isLoading: false,       // État de chargement
    error: null,            // Erreur éventuelle
    isInitialized: false    // Protection contre double initialisation
  };

  /* ========================================
     RÉCUPÉRATION DES REPOS GITHUB
     ======================================== */

  /**
   * Récupère les repositories depuis l'API GitHub
   * @returns {Promise<Array>} Liste des repositories
   */
  async function fetchGitHubRepos() {
    // Construire l'URL avec paramètres
    const params = new URLSearchParams(CONFIG.repoParams);
    const url = `${CONFIG.apiBaseUrl}/users/${CONFIG.username}/repos?${params}`;

    try {
      state.isLoading = true;
      state.error = null;

      console.log('[ProjectsAPI] Fetching GitHub repos from:', url);

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      // Vérifier le rate limit
      const remaining = response.headers.get('X-RateLimit-Remaining');
      const limit = response.headers.get('X-RateLimit-Limit');
      console.log(`[ProjectsAPI] GitHub API Rate Limit: ${remaining}/${limit} remaining`);

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos = await response.json();
      console.log(`[ProjectsAPI] Fetched ${repos.length} repositories from GitHub`);

      // Filtrer les repos selon la configuration
      const filteredRepos = filterRepos(repos);
      console.log(`[ProjectsAPI] After filtering: ${filteredRepos.length} repositories`);
      
      // Stocker dans le cache
      cacheRepos(filteredRepos);

      state.repos = filteredRepos;
      state.filteredRepos = filteredRepos;
      state.isLoading = false;

      return filteredRepos;

    } catch (error) {
      console.error('[ProjectsAPI] Error fetching GitHub repos:', error);
      state.error = error.message;
      state.isLoading = false;

      // Essayer de charger depuis le cache en cas d'erreur
      const cachedRepos = getCachedRepos();
      if (cachedRepos && cachedRepos.length > 0) {
        console.warn('[ProjectsAPI] Using cached repos due to API error');
        state.repos = cachedRepos;
        state.filteredRepos = cachedRepos;
        return cachedRepos;
      }

      throw error;
    }
  }

  /**
   * Filtre les repos selon la configuration
   * @param {Array} repos - Liste brute des repos
   * @returns {Array} Repos filtrés
   */
  function filterRepos(repos) {
    return repos.filter(repo => {
      // Exclure le repo du portfolio lui-même
      if (repo.name === 'MithrandirEa.github.io' || repo.name.toLowerCase().includes('github.io')) {
        return false;
      }

      // Exclure les forks si configuré
      if (CONFIG.filters.excludeForks && repo.fork) {
        return false;
      }

      // Exclure les archivés si configuré
      if (CONFIG.filters.excludeArchived && repo.archived) {
        return false;
      }

      // Vérifier le nombre minimum d'étoiles
      if (repo.stargazers_count < CONFIG.filters.minStars) {
        return false;
      }

      // Filtrer par langage si spécifié
      if (CONFIG.filters.languages.length > 0) {
        if (!repo.language || !CONFIG.filters.languages.includes(repo.language)) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Extrait tous les langages uniques des repos
   * @param {Array} repos - Liste des repos
   * @returns {Array} Liste des langages uniques
   */
  function extractLanguages(repos) {
    const languages = new Set();
    repos.forEach(repo => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    return Array.from(languages).sort();
  }

  /**
   * Filtre les repos par langage
   * @param {string} language - Langage à filtrer ('all' pour tous)
   */
  function filterByLanguage(language) {
    console.log('[ProjectsAPI] Filtering by language:', language);
    
    state.activeLanguage = language;
    
    if (language === 'all') {
      state.filteredRepos = filterRepos(state.repos);
    } else {
      const baseFiltered = filterRepos(state.repos);
      state.filteredRepos = baseFiltered.filter(repo => repo.language === language);
    }
    
    renderProjects();
    updateResultsCount();
  }

  /**
   * Rend les boutons de filtre dans l'interface
   */
  function renderFilters() {
    const container = document.querySelector('.projects-filters__container');
    if (!container) {
      console.log('[ProjectsAPI] Filters container not found');
      return;
    }

    const languages = extractLanguages(state.repos);
    
    // Créer le HTML des filtres
    let filtersHTML = `
      <div class="filters-wrapper">
        <button 
          class="filter-btn ${state.activeLanguage === 'all' ? 'filter-btn--active' : ''}" 
          data-language="all"
          aria-pressed="${state.activeLanguage === 'all'}">
          Tous
        </button>
    `;
    
    languages.forEach(lang => {
      filtersHTML += `
        <button 
          class="filter-btn ${state.activeLanguage === lang ? 'filter-btn--active' : ''}" 
          data-language="${lang}"
          aria-pressed="${state.activeLanguage === lang}">
          ${lang}
        </button>
      `;
    });
    
    filtersHTML += `
      </div>
      <div class="results-count" id="resultsCount" aria-live="polite"></div>
    `;
    
    container.innerHTML = filtersHTML;
    
    // Attacher les événements
    const filterButtons = container.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const language = btn.dataset.language;
        filterByLanguage(language);
        
        // Mettre à jour les états actifs
        filterButtons.forEach(b => {
          b.classList.remove('filter-btn--active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('filter-btn--active');
        btn.setAttribute('aria-pressed', 'true');
      });
    });
    
    // Mettre à jour le compteur initial
    updateResultsCount();
  }

  /**
   * Met à jour le compteur de résultats
   */
  function updateResultsCount() {
    const countElement = document.getElementById('resultsCount');
    if (!countElement) return;
    
    const count = state.filteredRepos.length;
    const text = count === 1 ? '1 projet affiché' : `${count} projets affichés`;
    countElement.textContent = text;
  }

  /* ========================================
     GESTION DU CACHE
     ======================================== */

  /**
   * Stocke les repos dans localStorage avec timestamp
   * @param {Array} repos - Liste des repos à cacher
   */
  function cacheRepos(repos) {
    try {
      const cacheData = {
        timestamp: Date.now(),
        repos: repos
      };
      localStorage.setItem(CONFIG.cacheKey, JSON.stringify(cacheData));
      console.log('[ProjectsAPI] Repos cached successfully:', repos.length, 'items');
    } catch (error) {
      console.warn('[ProjectsAPI] Failed to cache repos:', error);
    }
  }

  /**
   * Récupère les repos du cache s'ils sont encore valides
   * @returns {Array|null} Repos du cache ou null si expiré/absent
   */
  function getCachedRepos() {
    try {
      const cached = localStorage.getItem(CONFIG.cacheKey);
      if (!cached) {
        console.log('[ProjectsAPI] No cache found');
        return null;
      }

      const cacheData = JSON.parse(cached);
      const age = Date.now() - cacheData.timestamp;

      // Vérifier si le cache est encore valide
      if (age < CONFIG.cacheExpiration) {
        console.log(`[ProjectsAPI] Using cached repos (age: ${Math.round(age / 1000 / 60)} minutes, ${cacheData.repos.length} items)`);
        return cacheData.repos;
      } else {
        console.log('[ProjectsAPI] Cache expired (age:', Math.round(age / 1000 / 60), 'minutes)');
        localStorage.removeItem(CONFIG.cacheKey);
        return null;
      }
    } catch (error) {
      console.warn('[ProjectsAPI] Failed to read cache:', error);
      return null;
    }
  }

  /**
   * Efface le cache
   */
  function clearCache() {
    localStorage.removeItem(CONFIG.cacheKey);
    console.log('[ProjectsAPI] Cache cleared');
  }

  /* ========================================
     INITIALISATION
     ======================================== */

  /**
   * Initialise le module projects
   */
  async function init() {
    console.log('[ProjectsAPI] Initializing projects module...');
    console.log('[ProjectsAPI] Current state:', { isLoading: state.isLoading, error: state.error, repos: state.repos?.length });

    // Vérifier si on a un cache valide
    const cachedRepos = getCachedRepos();
    console.log('[ProjectsAPI] Cached repos:', cachedRepos ? cachedRepos.length : 'none');
    
    if (cachedRepos && cachedRepos.length > 0) {
      console.log('[ProjectsAPI] Using cached repos');
      state.repos = cachedRepos;
      state.filteredRepos = cachedRepos;
      state.isLoading = false;
      state.error = null;
      
      // Charger depuis l'API en arrière-plan pour rafraîchir le cache (silencieusement, sans re-render)
      setTimeout(() => {
        fetchGitHubRepos().then(() => {
          console.log('[ProjectsAPI] Background refresh complete, cache updated');
          // Ne pas re-render automatiquement pour éviter le "double chargement"
          // Les nouvelles données seront utilisées au prochain chargement de page
        }).catch(err => {
          console.warn('[ProjectsAPI] Background refresh failed:', err);
        });
      }, 2000);
      
      return cachedRepos;
    }

    // Pas de cache, charger depuis l'API
    console.log('[ProjectsAPI] No cache, fetching from API...');
    try {
      const repos = await fetchGitHubRepos();
      console.log('[ProjectsAPI] Fetch complete, repos:', repos ? repos.length : 0);
      return repos;
    } catch (error) {
      console.error('[ProjectsAPI] Failed to initialize projects:', error);
      throw error;
    }
  }

  /* ========================================
     UTILITAIRES
     ======================================== */

  /**
   * Retourne les repos actuellement filtrés
   * @returns {Array} Liste des repos
   */
  function getRepos() {
    return state.filteredRepos;
  }

  /**
   * Retourne l'état de chargement
   * @returns {boolean} True si en cours de chargement
   */
  function isLoading() {
    return state.isLoading;
  }

  /**
   * Retourne l'erreur éventuelle
   * @returns {string|null} Message d'erreur ou null
   */
  function getError() {
    return state.error;
  }

  /**
   * Force un rafraîchissement depuis l'API
   * @returns {Promise<Array>} Liste des repos
   */
  async function refresh() {
    clearCache();
    return await fetchGitHubRepos();
  }

  /* ========================================
     UI - RENDU DES PROJETS
     ======================================== */

  /**
   * Génère le HTML pour une carte de projet
   * @param {Object} repo - Données du repo GitHub
   * @returns {string} HTML de la carte
   */
  function createProjectCard(repo) {
    // Préparer les données
    const title = repo.name || 'Sans titre';
    const description = repo.description || 'Aucune description disponible';
    const language = repo.language || null;
    const topics = repo.topics || [];
    const stars = repo.stargazers_count || 0;
    const repoUrl = repo.html_url || '#';
    const homepage = repo.homepage || null;
    
    // Créer le HTML de la carte (wrapped in <li>)
    return `
      <li>
        <article class="project-card fade-in-card" data-repo-name="${title}">
        <!-- Header -->
        <div class="project-card__header">
          <h3 class="project-card__title">
            <svg class="project-card__title-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            ${title}
          </h3>
          <p class="project-card__description">${description}</p>
        </div>
        
        <!-- Body -->
        <div class="project-card__body">
          <!-- Meta info -->
          <div class="project-card__meta">
            ${language ? `
              <span class="project-card__language">
                <span class="project-card__language-dot"></span>
                ${language}
              </span>
            ` : ''}
            
            ${stars > 0 ? `
              <span class="project-card__stars">
                <svg class="project-card__stars-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                ${stars}
              </span>
            ` : ''}
          </div>
          
          <!-- Topics -->
          ${topics.length > 0 ? `
            <ul class="project-card__topics" aria-label="Topics">
              ${topics.slice(0, 5).map(topic => `
                <li class="project-card__topic">${topic}</li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
        
        <!-- Footer -->
        <div class="project-card__footer">
          <div class="project-card__actions">
            <a href="${repoUrl}" 
               class="project-card__link" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Voir ${title} sur GitHub">
              <svg class="project-card__link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            
            ${homepage ? `
              <a href="${homepage}" 
                 class="project-card__link" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Voir la démo de ${title}">
                <svg class="project-card__link-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Démo
              </a>
            ` : ''}
          </div>
        </div>
      </article>
      </li>
    `;
  }

  /**
   * Affiche un état de chargement
   */
  function showLoading() {
    console.log('[ProjectsAPI] showLoading called');
    const container = document.querySelector('.projects-grid__container');
    if (!container) {
      console.error('[ProjectsAPI] Container not found in showLoading!');
      return;
    }
    
    // Créer des cartes skeleton pour un meilleur effet de chargement
    const skeletonCards = Array.from({ length: 6 }, (_, i) => `
      <li class="project-card project-card--skeleton" aria-hidden="true">
        <article class="card">
          <div class="card__skeleton-header"></div>
          <div class="card__skeleton-text"></div>
          <div class="card__skeleton-text card__skeleton-text--short"></div>
          <div class="card__skeleton-footer">
            <div class="card__skeleton-badge"></div>
            <div class="card__skeleton-badge"></div>
            <div class="card__skeleton-badge"></div>
          </div>
        </article>
      </li>
    `).join('');
    
    container.innerHTML = `<ul class="projects-grid__list">${skeletonCards}</ul>`;
    console.log('[ProjectsAPI] Skeleton loading UI displayed');
  }

  /**
   * Affiche un message d'erreur
   * @param {string} message - Message d'erreur
   */
  function showError(message) {
    const container = document.querySelector('.projects-grid__container');
    if (!container) return;
    
    container.innerHTML = `
      <div class="projects-grid__error">
        <h2 class="projects-grid__error-title">Erreur de chargement</h2>
        <p class="projects-grid__error-message">${message}</p>
        <button class="btn btn--primary" onclick="window.ProjectsAPI.refresh().then(() => window.ProjectsAPI.renderProjects())">
          Réessayer
        </button>
      </div>
    `;
  }

  /**
   * Affiche un message vide
   */
  function showEmpty() {
    const container = document.querySelector('.projects-grid__container');
    if (!container) return;
    
    container.innerHTML = `
      <div class="projects-grid__empty">
        <p>Aucun projet trouvé.</p>
      </div>
    `;
  }

  /**
   * Rend les projets dans la grille
   */
  function renderProjects() {
    console.log('[ProjectsAPI] renderProjects called');
    
    const container = document.querySelector('.projects-grid__container');
    if (!container) {
      console.error('[ProjectsAPI] Container not found!');
      return;
    }
    
    console.log('[ProjectsAPI] Container found, state:', { 
      isLoading: state.isLoading, 
      error: state.error, 
      repos: state.filteredRepos?.length 
    });
    
    // Vérifier l'état
    if (state.isLoading) {
      console.log('[ProjectsAPI] Still loading, showing spinner');
      showLoading();
      return;
    }
    
    if (state.error) {
      console.log('[ProjectsAPI] Error state, showing error:', state.error);
      showError(state.error);
      return;
    }
    
    const repos = state.filteredRepos;
    
    if (!repos || repos.length === 0) {
      console.log('[ProjectsAPI] No repos to display');
      showEmpty();
      return;
    }
    
    console.log('[ProjectsAPI] Rendering', repos.length, 'projects');
    
    // Ajouter transition fade-out avant de changer le contenu
    const existingList = container.querySelector('.projects-grid__list');
    if (existingList && existingList.classList.contains('fade-in-list')) {
      existingList.style.opacity = '0';
      setTimeout(() => {
        renderProjectsContent(container, repos);
      }, 300);
    } else {
      renderProjectsContent(container, repos);
    }
  }

  /**
   * Rend le contenu des projets
   * @param {HTMLElement} container - Conteneur
   * @param {Array} repos - Repos à afficher
   */
  function renderProjectsContent(container, repos) {
    // Créer la grille de projets
    const projectsHTML = repos.map(repo => createProjectCard(repo)).join('');
    console.log('[ProjectsAPI] Generated HTML length:', projectsHTML.length, 'chars');
    
    container.innerHTML = `
      <ul class="projects-grid__list fade-in-list">
        ${projectsHTML}
      </ul>
    `;
    console.log('[ProjectsAPI] HTML inserted into container');
    
    // Appliquer les animations avec décalage
    const cards = container.querySelectorAll('.project-card');
    console.log('[ProjectsAPI] Found', cards.length, 'cards in DOM');
    
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
    console.log('[ProjectsAPI] Animation delays applied');
    
    // Ajouter les événements de clic sur les cartes
    addCardClickEvents();
  }

  /**
   * Initialise le rendu des projets sur la page
   */
  async function initProjectsPage() {
    console.log('[ProjectsAPI] initProjectsPage called, readyState:', document.readyState);
    
    // Éviter la double initialisation
    if (state.isInitialized) {
      console.log('[ProjectsAPI] Already initialized, skipping');
      return;
    }
    
    // Vérifier qu'on est sur la page projets
    const container = document.querySelector('.projects-grid__container');
    if (!container) {
      console.log('[ProjectsAPI] Projects container not found, skipping initialization');
      return;
    }
    
    state.isInitialized = true;
    console.log('[ProjectsAPI] Container found, initializing projects page...');
    
    // Initialiser la modale
    initModal();
    
    // Afficher le loading
    showLoading();
    
    try {
      // Initialiser l'API (charge depuis cache ou API)
      console.log('[ProjectsAPI] Calling init()...');
      const repos = await init();
      console.log('[ProjectsAPI] Init complete, repos:', repos ? repos.length : 0);
      console.log('[ProjectsAPI] State after init:', { isLoading: state.isLoading, error: state.error, repos: state.filteredRepos?.length });
      
      // Rendre les filtres
      console.log('[ProjectsAPI] Rendering filters...');
      renderFilters();
      
      // Rendre les projets
      console.log('[ProjectsAPI] Calling renderProjects()...');
      renderProjects();
      
      console.log('[ProjectsAPI] Projects page initialized successfully');
    } catch (error) {
      console.error('[ProjectsAPI] Failed to initialize projects page:', error);
      showError('Impossible de charger les projets. Veuillez réessayer plus tard.');
    }
  }

  /* ========================================
     MODAL - GESTION DES DÉTAILS
     ======================================== */

  // Variable pour stocker l'élément qui a ouvert la modale (pour restaurer le focus)
  let modalTriggerElement = null;

  /**
   * Récupère le README d'un repo via l'API GitHub
   * @param {Object} repo - Données du repo
   * @returns {Promise<string|null>} - Contenu du README ou null
   */
  async function fetchReadme(repo) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`, {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      });

      if (!response.ok) {
        console.log(`[ProjectsAPI] No README found for ${repo.name}`);
        return null;
      }

      const readme = await response.text();
      return readme;
    } catch (error) {
      console.error(`[ProjectsAPI] Error fetching README for ${repo.name}:`, error);
      return null;
    }
  }

  /**
   * Parse le Markdown basique en HTML (simple)
   * @param {string} markdown - Texte Markdown
   * @returns {string} - HTML
   */
  function parseMarkdown(markdown) {
    if (!markdown) return '';

    let html = markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Code blocks
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Line breaks
      .replace(/\n\n/gim, '</p><p>')
      .replace(/\n/gim, '<br>');

    return `<p>${html}</p>`;
  }

  /**
   * Ouvre la modale avec les détails d'un projet
   * @param {Object} repo - Données du repo
   * @param {HTMLElement} triggerElement - Élément qui a déclenché l'ouverture (pour focus trap)
   */
  function openModal(repo, triggerElement = null) {
    console.log('[ProjectsAPI] Opening modal for:', repo.name);
    console.log('[ProjectsAPI] Repo data:', repo);
    console.log('[ProjectsAPI] html_url:', repo.html_url);
    
    // Stocker l'élément déclencheur pour restaurer le focus à la fermeture
    modalTriggerElement = triggerElement;
    
    const modal = document.getElementById('projectModal');
    if (!modal) {
      console.error('[ProjectsAPI] Modal element not found');
      return;
    }

    // Remplir les données
    document.getElementById('modalTitle').textContent = repo.name;
    document.querySelector('.modal__description').textContent = repo.description || 'Aucune description disponible';
    
    // Stats
    document.getElementById('modalStars').textContent = repo.stargazers_count || 0;
    document.getElementById('modalForks').textContent = repo.forks_count || 0;
    
    // Date de mise à jour
    const updatedDate = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString('fr-FR') : '-';
    document.getElementById('modalUpdated').textContent = updatedDate;
    
    // Technologies (topics + language)
    const techContainer = document.getElementById('modalTechnologies');
    const technologies = [];
    if (repo.language) technologies.push(repo.language);
    if (repo.topics && repo.topics.length > 0) {
      technologies.push(...repo.topics);
    }
    
    if (technologies.length > 0) {
      techContainer.innerHTML = technologies.map(tech => 
        `<span class="modal__technology">${tech}</span>`
      ).join('');
      document.getElementById('modalTechnologiesSection').style.display = 'block';
    } else {
      document.getElementById('modalTechnologiesSection').style.display = 'none';
    }
    
    // Liens
    const githubLink = document.getElementById('modalGithubLink');
    const githubUrl = repo.html_url || `https://github.com/${CONFIG.username}/${repo.name}`;
    console.log('[ProjectsAPI] Setting GitHub link to:', githubUrl);
    githubLink.href = githubUrl;
    
    const demoLink = document.getElementById('modalDemoLink');
    if (repo.homepage) {
      demoLink.href = repo.homepage;
      demoLink.style.display = 'inline-flex';
    } else {
      demoLink.style.display = 'none';
    }
    
    // Charger le README si disponible (optionnel)
    const readmeSection = document.getElementById('modalReadmeSection');
    const readmeContent = document.getElementById('modalReadme');
    if (readmeContent) {
      fetchReadme(repo).then(readme => {
        if (readme) {
          // Limiter à 1000 caractères pour ne pas surcharger
          const truncated = readme.length > 1000 ? readme.substring(0, 1000) + '...' : readme;
          readmeContent.innerHTML = parseMarkdown(truncated);
          readmeSection.style.display = 'block';
        } else {
          readmeSection.style.display = 'none';
        }
      });
    }
    
    // Ouvrir la modale
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus sur le bouton close pour accessibilité
    const closeButton = modal.querySelector('.modal__close');
    setTimeout(() => {
      closeButton.focus();
      // Initialiser le focus trap
      initFocusTrap(modal);
    }, 100);
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
  }

  /**
   * Ferme la modale
   */
  function closeModal() {
    console.log('[ProjectsAPI] Closing modal');
    
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    
    // Réactiver le scroll du body
    document.body.style.overflow = '';
    
    // Restaurer le focus sur l'élément déclencheur
    if (modalTriggerElement) {
      setTimeout(() => {
        modalTriggerElement.focus();
        modalTriggerElement = null;
      }, 100);
    }
  }

  /**
   * Initialise les événements de la modale
   */
  function initModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) {
      console.log('[ProjectsAPI] Modal not found, skipping modal initialization');
      return;
    }

    console.log('[ProjectsAPI] Initializing modal events');

    // Bouton close
    const closeButton = modal.querySelector('.modal__close');
    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    }

    // Clic sur l'overlay
    const overlay = modal.querySelector('.modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', closeModal);
    }

    // Touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal();
      }
    });

    // Empêcher la fermeture si on clique dans le container (mais pas sur les liens)
    const container = modal.querySelector('.modal__container');
    if (container) {
      container.addEventListener('click', (e) => {
        // Permettre la navigation sur les liens
        if (!e.target.closest('a')) {
          e.stopPropagation();
        }
      });
    }
  }

  /**
   * Ajoute les événements de clic sur les cartes
   */
  function addCardClickEvents() {
    const cards = document.querySelectorAll('.project-card');
    console.log('[ProjectsAPI] Adding click events to', cards.length, 'cards');
    
    cards.forEach((card) => {
      // Trouver le repo correspondant
      const repoName = card.getAttribute('data-repo-name');
      const repo = state.filteredRepos.find(r => r.name === repoName);
      
      if (!repo) {
        console.warn('[ProjectsAPI] Repo not found for card:', repoName);
        return;
      }

      // Ajouter l'événement de clic sur la carte (mais pas sur les liens)
      card.addEventListener('click', (e) => {
        // Ne pas ouvrir la modale si on clique sur un lien
        if (e.target.closest('a')) {
          return;
        }
        
        e.preventDefault();
        openModal(repo, card);
      });

      // Rendre la carte cliquable avec le clavier
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Voir les détails de ${repo.name}`);
      
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(repo, card);
        }
      });
    });
  }

  /**
   * Initialise le focus trap dans la modale
   * @param {HTMLElement} modal - Élément modal
   */
  function initFocusTrap(modal) {
    // Récupérer tous les éléments focusables dans la modale
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Gestionnaire pour piéger le focus
    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else { // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    
    // Ajouter l'écouteur
    modal.addEventListener('keydown', trapFocus);
    
    // Nettoyer lors de la fermeture
    const cleanup = () => {
      modal.removeEventListener('keydown', trapFocus);
      modal.removeEventListener('transitionend', cleanup);
    };
    
    // Retirer l'écouteur quand la modale se ferme
    modal.addEventListener('transitionend', cleanup);
  }

  /* ========================================
     EXPORT PUBLIC
     ======================================== */

  // Exposer l'API publique
  window.ProjectsAPI = {
    init,
    fetchGitHubRepos,
    getRepos,
    isLoading,
    getError,
    refresh,
    clearCache,
    renderProjects,
    initProjectsPage,
    CONFIG,
    state
  };

  console.log('[ProjectsAPI] Module loaded, readyState:', document.readyState);
  
  // Auto-initialiser si le DOM est déjà chargé
  if (document.readyState === 'loading') {
    console.log('[ProjectsAPI] DOM still loading, adding DOMContentLoaded listener');
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[ProjectsAPI] DOMContentLoaded event fired');
      initProjectsPage();
    });
  } else {
    console.log('[ProjectsAPI] DOM already loaded, initializing immediately');
    // Petite attente pour s'assurer que tout est prêt
    setTimeout(initProjectsPage, 100);
  }

})();
