  function inviaRichiesta() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (!nome || !email) {
      alert('Per favore compila almeno nome ed email.');
      return;
    }
    alert('Grazie ' + nome + '! La tua richiesta è stata inviata. Ti contatterò entro 24 ore.');
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
