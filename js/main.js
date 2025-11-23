/**
 * QuantumX Foundation - Main JavaScript
 * Handles all interactive functionality for the website
 */

(function() {
    'use strict';

    // ============================================
    // Configuration
    // ============================================
    const CONFIG = {
        toastDuration: 5000, // milliseconds
        headerOffset: 80, // pixels for smooth scroll
        formSubmitDelay: 100 // milliseconds
    };

    // ============================================
    // Mobile Menu Handler
    // ============================================
    const MobileMenu = {
        init: function() {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            
            if (menuBtn && menu) {
                menuBtn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }
        }
    };

    // ============================================
    // Smooth Scroll Handler
    // ============================================
    const SmoothScroll = {
        init: function() {
            const anchors = document.querySelectorAll('a[href^="#"]');
            const mobileMenu = document.getElementById('mobile-menu');
            
            anchors.forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    // Skip if it's just "#"
                    if (href === '#' || href === '') {
                        return;
                    }
                    
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - CONFIG.headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (mobileMenu) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
        }
    };

    // ============================================
    // Toast Notification System
    // ============================================
    const Toast = {
        show: function() {
            const toast = document.getElementById('toast');
            if (!toast) return;

            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, CONFIG.toastDuration);
        },

        hide: function() {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.classList.remove('show');
            }
        }
    };

    // ============================================
    // Form Handler
    // ============================================
    const FormHandler = {
        init: function() {
            const form = document.querySelector('form[name="newsletter"]');
            if (!form) return;

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(form);
                const emailInput = form.querySelector('input[type="email"]');
                const emailValue = emailInput ? emailInput.value : '';

                // Submit to Netlify using AJAX (as per Netlify docs)
                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                })
                .then(() => {
                    // Success - show toast and reset form
                    Toast.show();
                    if (emailInput) {
                        emailInput.value = '';
                    }
                })
                .catch((error) => {
                    // Error - show error message
                    console.error('Form submission error:', error);
                    Toast.show(); // Still show toast for user feedback
                    if (emailInput) {
                        emailInput.value = '';
                    }
                });
            });
        }
    };

    // ============================================
    // URL Success Parameter Handler
    // ============================================
    const URLHandler = {
        checkSuccess: function() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('success') === 'true') {
                Toast.show();
                // Clean URL by removing query parameter
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    };

    // ============================================
    // Initialization
    // ============================================
    const App = {
        init: function() {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.start();
                });
            } else {
                this.start();
            }
        },

        start: function() {
            MobileMenu.init();
            SmoothScroll.init();
            FormHandler.init();
            URLHandler.checkSuccess();
        }
    };

    // Start the application
    App.init();

})();

