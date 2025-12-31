/**
 * CV Page - Smooth Scroll Navigation
 * Gère la navigation par ancres avec calcul dynamique de l'offset
 * pour les éléments sticky (header + cv-nav)
 */

(function() {
  'use strict';

  /**
   * Initialise la navigation smooth scroll pour les ancres CV
   */
  function initCVNavigation() {
    // Sélectionner tous les liens d'ancre dans la navigation CV
    const cvNavLinks = document.querySelectorAll('.cv-nav a[href^="#"]');
    
    if (cvNavLinks.length === 0) return;

    cvNavLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  }

  /**
   * Gère le clic sur un lien d'ancre
   * @param {Event} e - Événement de clic
   */
  function handleAnchorClick(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (!targetElement) return;

    // Calculer l'offset dynamiquement
    const offset = calculateScrollOffset();
    
    // Calculer la position cible
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    // Scroll smooth vers la cible
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Mettre à jour l'état actif dans la navigation
    updateActiveNavLink(this);
  }

  /**
   * Calcule l'offset nécessaire basé sur les hauteurs des éléments sticky
   * @returns {number} - Hauteur totale de l'offset en pixels
   */
  function calculateScrollOffset() {
    const header = document.querySelector('.header');
    const cvNav = document.querySelector('.cv-nav');
    
    let offset = 0;

    if (header) {
      offset += header.offsetHeight;
    }

    if (cvNav) {
      offset += cvNav.offsetHeight;
    }

    // Ajouter un petit buffer pour l'espacement visuel (optionnel)
    offset += 12;

    return offset;
  }

  /**
   * Met à jour le lien actif dans la navigation
   * @param {HTMLElement} activeLink - Le lien cliqué
   */
  function updateActiveNavLink(activeLink) {
    const allLinks = document.querySelectorAll('.cv-nav__link');
    
    allLinks.forEach(link => {
      link.classList.remove('cv-nav__link--active');
    });
    
    activeLink.classList.add('cv-nav__link--active');
  }

  /**
   * Met à jour la navigation active lors du scroll
   * Utilise Intersection Observer pour détecter quelle section est visible
   */
  function initScrollSpy() {
    const sections = document.querySelectorAll('.cv-section[id]');
    const navLinks = document.querySelectorAll('.cv-nav__link');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    // Calculer l'offset pour le rootMargin
    const offset = calculateScrollOffset();
    const rootMarginTop = `-${offset}px`;

    const observerOptions = {
      root: null,
      rootMargin: `${rootMarginTop} 0px -50% 0px`, // Top négatif = hauteur header+nav, Bottom = 50% de la fenêtre
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      // Trouver quelle section est la plus haute visible
      let activeSection = null;
      let highestTop = Infinity;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rect = entry.target.getBoundingClientRect();
          if (rect.top < highestTop) {
            highestTop = rect.top;
            activeSection = entry.target;
          }
        }
      });

      // Mettre à jour le lien actif si on a trouvé une section
      if (activeSection) {
        const id = activeSection.getAttribute('id');
        const correspondingLink = document.querySelector(`.cv-nav__link[href="#${id}"]`);
        
        if (correspondingLink) {
          navLinks.forEach(link => link.classList.remove('cv-nav__link--active'));
          correspondingLink.classList.add('cv-nav__link--active');
        }
      }
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  /**
   * Gestion du redimensionnement de fenêtre
   * Recalcule les offsets si nécessaire
   */
  function handleResize() {
    // Debounce pour éviter trop de calculs
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Les offsets seront recalculés automatiquement au prochain clic
        // Pas besoin d'action spécifique ici
      }, 250);
    });
  }

  /**
   * Initialisation au chargement du DOM
   */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initCVNavigation();
        initScrollSpy();
        handleResize();
      });
    } else {
      initCVNavigation();
      initScrollSpy();
      handleResize();
    }
  }

  // Lancer l'initialisation
  init();

})();
