// === CONFIGURACIÓN GLOBAL ===
const LANGUAGE_STORAGE_KEY = 'dentaltecLanguage';
let currentLanguage = 'it';

// === FUNCIÓN DE TRADUCCIÓN ===
function getTranslationByKey(key, lang = currentLanguage) {
  const keys = key.split('.');
  let value = translations[lang] || translations.it;
  for (const part of keys) {
    if (value == null) return null;
    value = value[part];
  }
  return typeof value === 'string' ? value : null;
}

// === CAMBIAR IDIOMA ===
function setLanguage(lang) {
  if (!supportedLanguages.includes(lang)) lang = 'it';
  currentLanguage = lang;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  document.body.classList.add('language-transition');
  setTimeout(() => document.body.classList.remove('language-transition'), 250);

  // Traducir textos — usa innerHTML para preservar <em>, <br> etc.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslationByKey(key, lang);
    if (text) {
      // Input/select/textarea usano textContent, gli altri innerHTML
      if (el.tagName === 'INPUT' || el.tagName === 'OPTION' || el.tagName === 'BUTTON') {
        el.textContent = text;
      } else {
        el.innerHTML = text;
      }
    }
  });

  // Traducir placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = getTranslationByKey(key, lang);
    if (text) el.placeholder = text;
  });

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// === INICIALIZAR IDIOMA ===
function initLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  const preferred = (saved && supportedLanguages.includes(saved))
    ? saved
    : (supportedLanguages.includes(browser) ? browser : 'it');
  setLanguage(preferred);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// === FORM + SCROLL REVEAL ===
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();

  if (typeof emailjs !== 'undefined') {
    emailjs.init("3xsG_zHPzUDR9xvh7");
  } else {
    console.warn('EmailJS SDK non caricato. Verifica il tag <script> nello HTML.');
  }

  // Bottoni cambio lingua
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Gestione del form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('.submit-btn');
      const originalText = btn.textContent;
      btn.textContent = currentLanguage === 'it' ? 'Invio in corso...' :
                        currentLanguage === 'es' ? 'Enviando...' :
                        currentLanguage === 'en' ? 'Sending...' : 'Wird gesendet...';
      btn.disabled = true;

      const formData = {
        from_name:  document.getElementById('nome').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        phone:      document.getElementById('telefono').value.trim(),
        profession: document.getElementById('professione').value,
        service:    document.getElementById('servizio').value,
        message:    document.getElementById('messaggio').value.trim()
      };

      // Validazione
      if (!formData.from_name || !formData.from_email) {
        alert(getTranslationByKey('alert.missingFields') || 'Compila nome ed email.');
        btn.textContent = originalText;
        btn.disabled = false;
        return;
      }

      if (!isValidEmail(formData.from_email)) {
        alert(getTranslationByKey('alert.invalidEmail') || 'Inserisci un indirizzo email valido.');
        btn.textContent = originalText;
        btn.disabled = false;
        return;
      }

      // Invio con EmailJS
      try {
        await emailjs.sendForm("service_1ae3n2j", "template_ns8xb6n", form);
        const successMsg = (getTranslationByKey('alert.success') || 'Grazie!')
          .replace('{name}', formData.from_name);
        alert(successMsg);
        form.reset();
      } catch (err) {
        console.error('EmailJS Error:', err);
        alert(currentLanguage === 'it' ? "Errore nell'invio. Riprova." :
              currentLanguage === 'es' ? 'Error al enviar. Intenta de nuevo.' :
              currentLanguage === 'en' ? 'Send failed. Please try again.' :
                                         'Sendefehler. Bitte erneut versuchen.');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});