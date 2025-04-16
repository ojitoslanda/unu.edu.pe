let currentSlide = 0;
const totalSlides = 3;
const carousel = document.querySelector(".carousel-slide");
let interval;

function startCarousel() {
  if (!interval) {
    interval = setInterval(() => {
      currentSlide++;
      carousel.style.transition = "transform 0.6s ease-in-out";
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

      if (currentSlide === totalSlides) {
        setTimeout(() => {
          carousel.style.transition = "none";
          carousel.style.transform = "translateX(0%)";
          currentSlide = 0;
        }, 600);
      }
    }, 3000);
  }
}

function stopCarousel() {
  clearInterval(interval);
  interval = null;
}

// Iniciar el carrusel automáticamente
startCarousel();

// Agregar eventos a cada slide (no solo a la imagen)
document.querySelectorAll(".slide").forEach((slide) => {
  slide.addEventListener("mousedown", stopCarousel);
  slide.addEventListener("touchstart", stopCarousel);

  slide.addEventListener("mouseup", startCarousel);
  slide.addEventListener("mouseleave", startCarousel);
  slide.addEventListener("touchend", startCarousel);
  slide.addEventListener("touchcancel", startCarousel);
});
