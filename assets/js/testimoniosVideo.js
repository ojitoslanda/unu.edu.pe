  document.querySelectorAll('.testimonio-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.getAttribute('data-video');

      // Evita duplicar el iframe si ya fue insertado
      if (card.querySelector('iframe')) return;

      // Limpia el contenido actual
      card.innerHTML = `
        <iframe width="100%" height="100%" src="${videoUrl}" 
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
      `;
    });
  });