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

  // === INICIALIZACIÓN EMAILJS ===
  // ⚠️ REEMPLAZA "TU_PUBLIC_KEY" CON TU CLAVE REAL DE EMAILJS
  emailjs.init("3xsG_zHPzUDR9xvh7");

  // === MANEJO DEL FORMULARIO CON EMAILJS ===
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const btn = this.querySelector(".submit-btn");
      const originalText = btn.textContent;
      btn.textContent = "Invio in corso...";
      btn.disabled = true;

      const formData = {
        from_name: document.getElementById("nome").value.trim(),
        from_email: document.getElementById("email").value.trim(),
        phone: document.getElementById("telefono").value.trim(),
        profession: document.getElementById("professione").value,
        service: document.getElementById("servizio").value,
        message: document.getElementById("messaggio").value.trim()
      };

      if (!formData.from_name || !formData.from_email) {
        const msg = getTranslationByKey("alert.missingFields") || "Per favore compila almeno nome ed email.";
        alert(msg);
        btn.textContent = originalText;
        btn.disabled = false;
        return;
      }

      // ⚠️ REEMPLAZA CON TUS IDS REALES DE EMAILJS
      emailjs.send("service_1ae3n2j", "template_ns8xb6n", formData)
        .then(() => {
          const successMsg = getTranslationByKey("alert.success")?.replace("{name}", formData.from_name)
            || "Grazie! La tua richiesta è stata inviata.";
          alert(successMsg);
          this.reset();
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          alert("Errore durante l'invio. Riprova o contattami via WhatsApp.");
        })
        .finally(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        });
    });
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
