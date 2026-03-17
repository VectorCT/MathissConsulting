(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const pathname = window.location.pathname.split('/').pop();
  const currentPage = pathname && pathname.length > 0 ? pathname : 'index.html';

  document.querySelectorAll('.site-nav a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  // Service media carousel functionality
  const serviceMediaShells = document.querySelectorAll('.service-media-shell');
  const carouselState = {};

  serviceMediaShells.forEach(function (shell) {
    const grid = shell.querySelector('.service-media-grid');
    const carouselId = grid.getAttribute('data-carousel');
    const tiles = grid.querySelectorAll('.media-tile');

    if (carouselId && tiles.length > 0) {
      carouselState[carouselId] = {
        currentIndex: 0,
        totalTiles: tiles.length,
        tilesPerView: 1,
        shell: shell,
        grid: grid,
        tiles: tiles,
        autoScrollInterval: null
      };

      // Set initial visibility
      updateCarouselView(carouselId);
      startAutoScroll(carouselId);

      // Add arrow click handlers
      const leftArrow = shell.querySelector('.media-arrow-left');
      const rightArrow = shell.querySelector('.media-arrow-right');

      if (leftArrow) {
        leftArrow.addEventListener('click', function () {
          resetAutoScroll(carouselId);
          navigateCarousel(carouselId, -1);
        });
        leftArrow.style.cursor = 'pointer';
      }

      if (rightArrow) {
        rightArrow.addEventListener('click', function () {
          resetAutoScroll(carouselId);
          navigateCarousel(carouselId, 1);
        });
        rightArrow.style.cursor = 'pointer';
      }

      // Stop autoscroll on hover
      shell.addEventListener('mouseenter', function () {
        stopAutoScroll(carouselId);
      });

      shell.addEventListener('mouseleave', function () {
        startAutoScroll(carouselId);
      });
    }
  });

  function updateCarouselView(carouselId) {
    const state = carouselState[carouselId];
    if (!state) return;

    const startIndex = state.currentIndex;
    const endIndex = Math.min(startIndex + state.tilesPerView, state.totalTiles);

    state.tiles.forEach(function (tile, index) {
      if (index >= startIndex && index < endIndex) {
        tile.style.display = 'block';
        tile.style.opacity = '1';
        tile.style.transition = 'opacity 0.35s ease';
      } else {
        tile.style.display = 'none';
        tile.style.opacity = '0';
      }
    });
  }

  function navigateCarousel(carouselId, direction) {
    const state = carouselState[carouselId];
    if (!state) return;

    const maxIndex = state.totalTiles - state.tilesPerView;
    state.currentIndex = state.currentIndex + direction * state.tilesPerView;

    // Circular navigation
    if (state.currentIndex < 0) {
      state.currentIndex = maxIndex;
    } else if (state.currentIndex > maxIndex) {
      state.currentIndex = 0;
    }

    updateCarouselView(carouselId);
  }

  function startAutoScroll(carouselId) {
    const state = carouselState[carouselId];
    if (!state || state.autoScrollInterval) return;

    state.autoScrollInterval = setInterval(function () {
      navigateCarousel(carouselId, 1);
    }, 5000); // Auto-advance every 5 seconds
  }

  function stopAutoScroll(carouselId) {
    const state = carouselState[carouselId];
    if (!state || !state.autoScrollInterval) return;

    clearInterval(state.autoScrollInterval);
    state.autoScrollInterval = null;
  }

  function resetAutoScroll(carouselId) {
    stopAutoScroll(carouselId);
    startAutoScroll(carouselId);
  }

  const contactForm = document.getElementById('contact-form');
  const successModal = document.getElementById('success-modal');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    const formFields = Array.from(contactForm.querySelectorAll('input, select, textarea'));
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const initialSubmitLabel = submitButton ? submitButton.textContent : 'Send Inquiry';

    function setFormStatus(message, type) {
      if (!formStatus) {
        return;
      }

      formStatus.textContent = message || '';
      formStatus.classList.remove('is-error', 'is-success');

      if (type === 'error') {
        formStatus.classList.add('is-error');
      }

      if (type === 'success') {
        formStatus.classList.add('is-success');
      }
    }

    function buildContactPayload() {
      const formData = new FormData(contactForm);

      return {
        firstName: String(formData.get('firstName') || '').trim(),
        lastName: String(formData.get('lastName') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        company: String(formData.get('company') || '').trim(),
        service: String(formData.get('service') || '').trim(),
        budget: String(formData.get('budget') || '').trim(),
        timeline: String(formData.get('timeline') || '').trim(),
        message: String(formData.get('message') || '').trim()
      };
    }

    async function sendInquiry(payload) {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      let responseData = {};
      try {
        responseData = await response.json();
      } catch (error) {
        responseData = {};
      }

      if (!response.ok) {
        throw new Error(responseData.message || 'Unable to send inquiry right now. Please try again shortly.');
      }

      return responseData;
    }

    function getErrorElement(field) {
      return document.getElementById(field.id + '-error');
    }

    function markFieldInvalid(field, message) {
      const errorElement = getErrorElement(field);
      field.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
      if (errorElement) {
        errorElement.textContent = message;
      }
    }

    function clearFieldState(field) {
      const errorElement = getErrorElement(field);
      field.classList.remove('is-invalid');
      field.setAttribute('aria-invalid', 'false');
      if (errorElement) {
        errorElement.textContent = '';
      }
    }

    function validateField(field) {
      const value = field.value.trim();
      const fieldName = field.name;
      let errorMessage = '';

      if (fieldName === 'firstName') {
        if (!value) {
          errorMessage = 'First name is required.';
        } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,}$/.test(value)) {
          errorMessage = 'Enter a valid first name.';
        }
      }

      if (fieldName === 'lastName') {
        if (!value) {
          errorMessage = 'Last name is required.';
        } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,}$/.test(value)) {
          errorMessage = 'Enter a valid last name.';
        }
      }

      if (fieldName === 'email') {
        if (!value) {
          errorMessage = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          errorMessage = 'Enter a valid email address.';
        }
      }

      if (fieldName === 'phone') {
        if (value && !/^\+?[0-9 ()\-]{7,20}$/.test(value)) {
          errorMessage = 'Enter a valid phone number.';
        }
      }

      if (fieldName === 'company') {
        if (value && value.length < 2) {
          errorMessage = 'Company name must be at least 2 characters.';
        }
      }

      if (fieldName === 'service') {
        if (!value) {
          errorMessage = 'Please select a service.';
        }
      }

      if (fieldName === 'budget') {
        if (value && value.length < 3) {
          errorMessage = 'Please select a valid budget range.';
        }
      }

      if (fieldName === 'timeline') {
        if (value && value.length < 3) {
          errorMessage = 'Please select a valid timeline.';
        }
      }

      if (fieldName === 'message') {
        if (!value) {
          errorMessage = 'Project details are required.';
        } else if (value.length < 20) {
          errorMessage = 'Please provide at least 20 characters.';
        }
      }

      if (errorMessage) {
        markFieldInvalid(field, errorMessage);
        return false;
      }

      clearFieldState(field);
      return true;
    }

    function validateAllFields() {
      let isValid = true;
      formFields.forEach(function (field) {
        const fieldIsValid = validateField(field);
        if (!fieldIsValid) {
          isValid = false;
        }
      });
      return isValid;
    }

    function openSuccessModal() {
      if (!successModal) return;
      successModal.hidden = false;
      document.body.classList.add('modal-open');
    }

    function closeSuccessModal() {
      if (!successModal) return;
      successModal.hidden = true;
      document.body.classList.remove('modal-open');
    }

    formFields.forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });

      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) {
          validateField(field);
        }
      });

      if (field.tagName === 'SELECT') {
        field.addEventListener('change', function () {
          validateField(field);
        });
      }
    });

    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      setFormStatus('', '');

      if (!validateAllFields()) {
        setFormStatus('Please correct the highlighted fields before submitting.', 'error');
        const firstInvalidField = contactForm.querySelector('.is-invalid');
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      setFormStatus('Sending inquiry...', 'success');

      try {
        const contactPayload = buildContactPayload();
        await sendInquiry(contactPayload);

        contactForm.reset();
        formFields.forEach(function (field) {
          clearFieldState(field);
        });
        setFormStatus('', '');
        openSuccessModal();
      } catch (error) {
        setFormStatus(error.message, 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = initialSubmitLabel;
        }
      }
    });

    if (successModal) {
      successModal.querySelectorAll('[data-modal-close]').forEach(function (element) {
        element.addEventListener('click', function () {
          closeSuccessModal();
        });
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !successModal.hidden) {
          closeSuccessModal();
        }
      });
    }
  }
})();
