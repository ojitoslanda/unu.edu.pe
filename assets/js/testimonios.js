document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".testimonios-inner");
  const btnPrev = document.querySelector(".testimonios-prev");
  const btnNext = document.querySelector(".testimonios-next");

  let index = 0;
  const maxClicks = 2; 
  const cardGap = 20; 
  let cardWidth;

  function updateCardWidth() {
      cardWidth = carousel.children[0].offsetWidth + cardGap;
  }

  updateCardWidth();

  function moverCarrusel(direccion) {
      index += direccion;
      
      if (index > maxClicks) {
          index = maxClicks; 
      } else if (index < 0) {
          index = 0; 
      }

      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${cardWidth * index}px)`;

      btnNext.disabled = (index === maxClicks);
      btnPrev.disabled = (index === 0);
  }

  btnPrev.addEventListener("click", () => moverCarrusel(-1));
  btnNext.addEventListener("click", () => moverCarrusel(1));

  window.addEventListener("resize", () => {
      updateCardWidth();
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${cardWidth * index}px)`;
  });

  btnPrev.disabled = true;

  // FUNCIÓN PARA CONVERTIR IMAGEN EN VIDEO
  const testimonios = document.querySelectorAll(".testimonio-card");

  testimonios.forEach(testimonio => {
      const imagen = testimonio.querySelector(".imagen-fondo-testimonio");
      const videoSrc = testimonio.getAttribute("data-video");

      imagen.addEventListener("click", function () {
          if (!videoSrc) return;

          // Crear elemento de video
          const video = document.createElement("video");
          video.src = videoSrc;
          video.controls = true; // Controles para pausar y reproducir
          video.autoplay = true;
          video.classList.add("video-testimonio");

          // Reemplazar la imagen con el video
          testimonio.replaceChild(video, imagen);
      });
  });
});
