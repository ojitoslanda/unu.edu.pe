let index = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    images[index].classList.remove('active'); // Oculta la imagen actual
    index = (index + 1) % totalImages; // Cambia al siguiente índice
    images[index].classList.add('active'); // Muestra la nueva imagen
}

setInterval(showNextImage, 5000); // Cambia cada 3 segundos