/**
 * Main JavaScript
 * Portfolio Professionnel - Clément SCIPION
 * 
 * Gère : Navigation, Menu mobile, Accessibilité
 */

'use strict';

/* ========================================
   VARIABLES GLOBALES
   ======================================== */

let menuToggle = null;
let navMenu = null;
let navLinks = null;
let header = null;
let backToTopButton = null;

/* ========================================
   INITIALISATION
   ======================================== */

/**
 * Initialise l'application au chargement du DOM
 */
function init() {
  // Récupération des éléments DOM
  menuToggle = document.querySelector('.menu-toggle');
  navMenu = document.querySelector('.nav');
  navLinks = document.querySelectorAll('.nav__link');
  header = document.querySelector('.header');
  backToTopButton = document.querySelector('.back-to-top');
  
  // Vérification de l'existence des éléments
  if (!menuToggle || !navMenu) {
    console.warn('Navigation elements not found');
    return;
  }
  
  // Initialisation des modules
  initMobileMenu();
  initNavigation();
  initAccessibility();
  initScrollBehavior();
  initBackToTop();
  initScrollAnimations();
  
  console.log('Portfolio initialized');
}

/* ========================================
   MENU MOBILE
   ======================================== */

/**
 * Initialise le menu hamburger mobile
 */
function initMobileMenu() {
  // Event listener pour le bouton hamburger
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  // Fermer le menu en cliquant sur l'overlay
  navMenu.addEventListener('click', (e) => {
    if (e.target === navMenu && navMenu.classList.contains('nav--open')) {
      closeMobileMenu();
    }
  });
  
  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav--open')) {
      closeMobileMenu();
    }
  });
}

/**
 * Toggle le menu mobile (ouvre/ferme)
 */
function toggleMobileMenu() {
  const isOpen = navMenu.classList.contains('nav--open');
  
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

/**
 * Ouvre le menu mobile
 */
function openMobileMenu() {
  console.log('[MENU] Opening mobile menu');
  console.log('[MENU] Nav element:', navMenu);
  navMenu.classList.add('nav--open');
  console.log('[MENU] Classes after add:', navMenu.className);
  console.log('[MENU] Computed style right:', window.getComputedStyle(navMenu).right);
  menuToggle.classList.add('menu-toggle--active');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Empêche le scroll
  
  // Focus sur le premier lien du menu pour l'accessibilité
  setTimeout(() => {
    const firstLink = navMenu.querySelector('.nav__link');
    if (firstLink) {
      firstLink.focus();
    }
  }, 100);
}

/**
 * Ferme le menu mobile
 */
function closeMobileMenu() {
  navMenu.classList.remove('nav--open');
  menuToggle.classList.remove('menu-toggle--active');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = ''; // Réactive le scroll
  
  // Remettre le focus sur le bouton hamburger
  menuToggle.focus();
}

/* ========================================
   NAVIGATION
   ======================================== */

/**
 * Initialise la navigation (liens, page active)
 */
function initNavigation() {
  // Fermer le menu mobile après clic sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  // Marquer la page active
  highlightActivePage();
}

/**
 * Met en surbrillance le lien de la page active
 */
function highlightActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Vérifier si c'est la page actuelle
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage === '/' && linkHref === 'index.html')) {
      link.classList.add('nav__link--active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('nav__link--active');
      link.removeAttribute('aria-current');
    }
  });
}

/* ========================================
   ACCESSIBILITÉ
   ======================================== */

/**
 * Initialise les fonctionnalités d'accessibilité
 */
function initAccessibility() {
  // Gestion du focus clavier
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Skip to main content
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
        // Retirer le tabindex après focus pour éviter les problèmes
        mainContent.addEventListener('blur', () => {
          mainContent.removeAttribute('tabindex');
        }, { once: true });
      }
    });
  }
  
  // Gérer le focus trap dans le menu mobile
  initFocusTrap();
}

/**
 * Gère le focus trap dans le menu mobile ouvert
 */
function initFocusTrap() {
  document.addEventListener('keydown', (e) => {
    // Si le menu mobile n'est pas ouvert, ne rien faire
    if (!navMenu || !navMenu.classList.contains('nav--open')) {
      return;
    }
    
    // Si Tab ou Shift+Tab
    if (e.key === 'Tab') {
      const focusableElements = navMenu.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      // Shift + Tab sur le premier élément : aller au dernier
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // Tab sur le dernier élément : aller au premier
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}

/* ========================================
   COMPORTEMENT DE SCROLL
   ======================================== */

/**
 * Initialise le comportement de scroll (header sticky, smooth scroll)
 */
function initScrollBehavior() {
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter classe quand on scroll
    if (currentScroll > 100) {
      header?.classList.add('header--scrolled');
    } else {
      header?.classList.remove('header--scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Smooth scroll pour les liens ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Ignorer si c'est juste "#"
      if (targetId === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(targetId);
      
      if (target) {
        const headerHeight = header?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Focus sur l'élément cible pour l'accessibilité
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
}

/* ========================================
   BOUTON RETOUR EN HAUT
   ======================================== */

/**
 * Initialise le bouton retour en haut
 */
function initBackToTop() {
  if (!backToTopButton) {
    // Créer le bouton dynamiquement s'il n'existe pas
    backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Retour en haut de la page');
    backToTopButton.innerHTML = `
      <svg class="back-to-top__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    document.body.appendChild(backToTopButton);
  }
  
  // Event listener pour le clic
  backToTopButton.addEventListener('click', scrollToTop);
  
  // Afficher/masquer selon le scroll
  window.addEventListener('scroll', toggleBackToTopVisibility);
}

/**
 * Affiche ou masque le bouton selon la position du scroll
 */
function toggleBackToTopVisibility() {
  if (window.pageYOffset > 300) {
    backToTopButton?.classList.add('visible');
  } else {
    backToTopButton?.classList.remove('visible');
  }
}

/**
 * Scroll smooth vers le haut de la page
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Focus sur l'élément de skip pour l'accessibilité
  setTimeout(() => {
    const skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
      skipLink.focus();
    }
  }, 500);
}

/* ========================================
   ANIMATIONS AU SCROLL
   ======================================== */

/**
 * Initialise les animations au scroll avec Intersection Observer
 */
function initScrollAnimations() {
  // Vérifier si le navigateur supporte Intersection Observer
  if (!('IntersectionObserver' in window)) {
    console.warn('Intersection Observer not supported');
    return;
  }

  // Vérifier la préférence utilisateur pour les animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    console.log('Animations disabled: user prefers reduced motion');
    return;
  }

  // Options pour l'Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -100px 0px', // Trigger un peu avant que l'élément soit visible
    threshold: 0.1 // 10% de l'élément visible
  };

  // Callback appelé quand un élément devient visible
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe d'animation
        entry.target.classList.add('fade-in-visible');
        
        // Arrêter d'observer cet élément (animation une seule fois)
        observer.unobserve(entry.target);
      }
    });
  };

  // Créer l'observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Sélectionner tous les éléments à animer
  const elementsToAnimate = document.querySelectorAll(`
    .cv-section,
    .projects-grid article,
    .contact-form,
    .contact-info,
    .hero,
    .skills,
    .cta
  `);

  // Observer chaque élément
  elementsToAnimate.forEach(element => {
    // Ajouter la classe initiale (caché)
    element.classList.add('fade-in-element');
    
    // Observer l'élément
    observer.observe(element);
  });
}

/* ========================================
   UTILITAIRES
   ======================================== */

/**
 * Détecte si on est sur mobile (< 768px)
 */
function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

/**
 * Détecte si on est sur tablette (768px - 1023px)
 */
function isTablet() {
  return window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
}

/**
 * Détecte si on est sur desktop (>= 1024px)
 */
function isDesktop() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

/* ========================================
   LANCEMENT
   ======================================== */

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM déjà chargé
  init();
}

// Export pour utilisation dans d'autres modules (si besoin)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isMobile,
    isTablet,
    isDesktop,
    closeMobileMenu,
    openMobileMenu
  };
}
