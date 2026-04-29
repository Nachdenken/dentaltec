  const LANGUAGE_STORAGE_KEY = 'dentaltecLanguage';
  let currentLanguage = 'it';

  function getTranslationByKey(key, lang = currentLanguage) {
    const keys = key.split('.');
    let value = translations[lang] || translations.it;
    for (const part of keys) {
      if (value == null) return null;
      value = value[part];
    }
    return typeof value === 'string' ? value : null;
  }

  function setLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
      lang = 'it';
    }

    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.body.classList.add('language-transition');
    window.setTimeout(() => document.body.classList.remove('language-transition'), 250);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const translation = getTranslationByKey(key, lang);
      if (translation !== null) {
        element.innerHTML = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = getTranslationByKey(key, lang);
      if (translation !== null) {
        element.placeholder = translation;
      }
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
  }

  function initLanguage() {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const browserLang = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : null;
    const preferred = savedLang && supportedLanguages.includes(savedLang)
      ? savedLang
      : supportedLanguages.includes(browserLang)
        ? browserLang
        : 'it';

    setLanguage(preferred);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
      });
    });
  });

  function inviaRichiesta() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (!nome || !email) {
      const message = getTranslationByKey('alert.missingFields');
      alert(message || 'Per favore compila almeno nome ed email.');
      return;
    }

    const successTemplate = getTranslationByKey('alert.success') || 'Grazie {name}! La tua richiesta è stata inviata. Ti contatterò entro 24 ore.';
    alert(successTemplate.replace('{name}', nome));
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('visible');
        }, 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger children in grids
  document.querySelectorAll('.services-grid, .why-grid, .testimonials-grid, .process-steps').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });
