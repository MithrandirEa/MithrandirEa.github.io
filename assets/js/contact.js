/**
 * Contact Form Validation & Submission
 * Portfolio Professionnel - MithrandirEa
 * 
 * Handles form validation, submission to Web3Forms, and user feedback
 */

(function() {
  'use strict';

  // DOM Elements
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitButton = form?.querySelector('button[type="submit"]');
  const honeypot = form?.querySelector('input[name="botcheck"]');

  // Error message elements
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  // Validation patterns
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /**
   * Validate a required field
   * @param {HTMLInputElement|HTMLTextAreaElement} input - The input element
   * @param {HTMLElement} errorElement - The error message element
   * @param {string} fieldName - Name of the field for error message
   * @returns {boolean} - True if valid, false otherwise
   */
  function validateRequiredField(input, errorElement, fieldName) {
    const value = input.value.trim();
    
    if (value === '') {
      showError(input, errorElement, `Le champ ${fieldName} est requis.`);
      return false;
    }
    
    clearError(input, errorElement);
    return true;
  }

  /**
   * Validate email field
   * @param {HTMLInputElement} input - The email input element
   * @param {HTMLElement} errorElement - The error message element
   * @returns {boolean} - True if valid, false otherwise
   */
  function validateEmail(input, errorElement) {
    const value = input.value.trim();
    
    // Check if empty (required field)
    if (value === '') {
      showError(input, errorElement, 'Le champ Email est requis.');
      return false;
    }
    
    // Check email format using regex
    if (!EMAIL_REGEX.test(value)) {
      showError(input, errorElement, 'Veuillez entrer une adresse email valide.');
      return false;
    }
    
    // Use browser's built-in validation as additional check
    if (!input.checkValidity()) {
      showError(input, errorElement, 'Veuillez entrer une adresse email valide.');
      return false;
    }
    
    clearError(input, errorElement);
    return true;
  }

  /**
   * Validate minimum length
   * @param {HTMLInputElement|HTMLTextAreaElement} input - The input element
   * @param {HTMLElement} errorElement - The error message element
   * @param {number} minLength - Minimum required length
   * @param {string} fieldName - Name of the field for error message
   * @returns {boolean} - True if valid, false otherwise
   */
  function validateMinLength(input, errorElement, minLength, fieldName) {
    const value = input.value.trim();
    
    if (value.length < minLength) {
      showError(input, errorElement, `Le ${fieldName} doit contenir au moins ${minLength} caractères.`);
      return false;
    }
    
    return true;
  }

  /**
   * Show error message and apply error styles
   * @param {HTMLElement} input - The input element
   * @param {HTMLElement} errorElement - The error message element
   * @param {string} message - The error message to display
   */
  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add('form__input--error');
    input.setAttribute('aria-invalid', 'true');
  }

  /**
   * Clear error message and remove error styles
   * @param {HTMLElement} input - The input element
   * @param {HTMLElement} errorElement - The error message element
   */
  function clearError(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove('form__input--error');
    input.setAttribute('aria-invalid', 'false');
  }

  /**
   * Validate all form fields
   * @returns {boolean} - True if all fields are valid, false otherwise
   */
  function validateForm() {
    let isValid = true;

    // Validate name (required, min 2 characters)
    if (!validateRequiredField(nameInput, nameError, 'Nom')) {
      isValid = false;
    } else if (!validateMinLength(nameInput, nameError, 2, 'nom')) {
      isValid = false;
    }

    // Validate email (required, valid format)
    if (!validateEmail(emailInput, emailError)) {
      isValid = false;
    }

    // Subject is optional, no validation needed

    // Validate message (required, min 10 characters)
    if (!validateRequiredField(messageInput, messageError, 'Message')) {
      isValid = false;
    } else if (!validateMinLength(messageInput, messageError, 10, 'message')) {
      isValid = false;
    }

    return isValid;
  }

  /**
   * Add real-time validation on input blur
   */
  function setupRealtimeValidation() {
    // Validate name on blur
    nameInput.addEventListener('blur', () => {
      if (nameInput.value.trim() !== '') {
        validateRequiredField(nameInput, nameError, 'Nom');
        validateMinLength(nameInput, nameError, 2, 'nom');
      }
    });

    // Clear error on focus
    nameInput.addEventListener('focus', () => {
      if (nameInput.classList.contains('form__input--error')) {
        clearError(nameInput, nameError);
      }
    });

    // Validate email on blur
    emailInput.addEventListener('blur', () => {
      if (emailInput.value.trim() !== '') {
        validateEmail(emailInput, emailError);
      }
    });

    // Clear error on focus
    emailInput.addEventListener('focus', () => {
      if (emailInput.classList.contains('form__input--error')) {
        clearError(emailInput, emailError);
      }
    });

    // Validate message on blur
    messageInput.addEventListener('blur', () => {
      if (messageInput.value.trim() !== '') {
        validateRequiredField(messageInput, messageError, 'Message');
        validateMinLength(messageInput, messageError, 10, 'message');
      }
    });

    // Clear error on focus
    messageInput.addEventListener('focus', () => {
      if (messageInput.classList.contains('form__input--error')) {
        clearError(messageInput, messageError);
      }
    });
  }

  /**
   * Handle form submission
   * @param {Event} event - The submit event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    // Check honeypot field (anti-spam protection)
    if (honeypot && honeypot.value !== '') {
      // Bot detected - silently reject without showing error to user
      console.warn('Spam detected: honeypot field filled');
      return;
    }

    // Validate form before submission
    if (!validateForm()) {
      // Focus on first error field
      const firstError = form.querySelector('.form__input--error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Disable submit button and show loading state
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      Envoi en cours...
    `;

    try {
      // Submit form data to Web3Forms
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success - show success message
        showSuccessMessage();
        form.reset();
        
        // Clear all error states
        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(subjectInput, subjectError);
        clearError(messageInput, messageError);
      } else {
        // Error from Web3Forms
        showErrorMessage(result.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      // Network or other error
      console.error('Form submission error:', error);
      showErrorMessage('Impossible de se connecter au serveur. Veuillez vérifier votre connexion et réessayer.');
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  }

  /**
   * Show success message
   */
  function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form__message form__message--success';
    successMessage.setAttribute('role', 'alert');
    successMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</span>
    `;
    
    // Insert message before form
    form.parentElement.insertBefore(successMessage, form);
    
    // Scroll to message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }

  /**
   * Show error message
   * @param {string} message - The error message to display
   */
  function showErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form__message form__message--error';
    errorMessage.setAttribute('role', 'alert');
    errorMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
      <span>${message}</span>
    `;
    
    // Insert message before form
    form.parentElement.insertBefore(errorMessage, form);
    
    // Scroll to message
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove message after 5 seconds
    setTimeout(() => {
      errorMessage.remove();
    }, 5000);
  }

  /**
   * Initialize form validation and submission
   */
  function init() {
    if (!form) {
      console.error('Contact form not found');
      return;
    }

    // Setup real-time validation
    setupRealtimeValidation();

    // Handle form submission
    form.addEventListener('submit', handleSubmit);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
