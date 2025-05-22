// ================ CONFIG: DESPLAZAMIENTO RESPONSIVE ================
let desplazamiento;
const width = window.innerWidth;

function definirDesplazamiento() {
    if (width < 576) {
        desplazamiento = 353; // Celular
    } else if (width < 992) {
        desplazamiento = 750; // Tablet
    } else {
        desplazamiento = 700; // Escritorio
    }
}

// Definir desplazamiento al cargar y actualizar si cambia tamaño de pantalla
window.addEventListener("resize", () => {
    definirDesplazamiento
    location.reload(); // También podrías regenerar los dots y recargar el scroll
});
definirDesplazamiento();


// ================ PAGINACIÓN: FACULTADES ================
const btnPrevFacultad = document.querySelector('.before-slide');
const btnNextFacultad = document.querySelector('.after-slide');
const contenedorFacultades = document.querySelector('.contenedor-facultad');

function desplazarFacultades(direccion) {
    // Alinear scroll a múltiplos del desplazamiento para evitar cortes
    contenedorFacultades.scrollLeft = Math.round(contenedorFacultades.scrollLeft / desplazamiento) * desplazamiento;

    contenedorFacultades.scrollBy({
        left: direccion * desplazamiento,
        behavior: "smooth"
    });
}

btnPrevFacultad.addEventListener("click", () => desplazarFacultades(-1));
btnNextFacultad.addEventListener("click", () => desplazarFacultades(1));


// ================ PAGINACIÓN: UNU INFORMA ================
const newsContainer = document.getElementById("newsContainer");
const paginationDots = document.getElementById("paginationDots");
const newsItems = document.querySelectorAll(".box-news");
let itemsPerView;
const width_unuinforma = window.innerWidth;

if (width_unuinforma < 576) {
    itemsPerView = 2;
} else if (width < 992) {
    itemsPerView = 2;
} else {
    itemsPerView = 4;
}

const totalPages = Math.ceil(newsItems.length / itemsPerView);
// Crear puntos de paginación (dots)
function crearDots() {
    paginationDots.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("div");
        dot.className = "dot" + (i === 0 ? " dot-active" : "");
        dot.addEventListener("click", () => irAPagina(i));
        paginationDots.appendChild(dot);
    }
}

// Ir a una página específica
function irAPagina(pagina) {
    const scrollPosition = pagina * newsContainer.clientWidth;
    newsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
    actualizarDots(pagina);
}

// Actualizar estilo activo de los dots
function actualizarDots(paginaActual = null) {
    const scrollActual = newsContainer.scrollLeft;
    const anchoSeccion = newsContainer.clientWidth;
    const pagina = paginaActual !== null
        ? paginaActual
        : Math.floor((scrollActual + anchoSeccion / 2) / anchoSeccion);
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("dot-active", i === pagina);
    });
}

// Detectar desplazamiento para cambiar dot activo
newsContainer.addEventListener("scroll", () => actualizarDots());

// Inicializar dots
crearDots();
/* fin de la la parte del codigo de pagination UNU INFORMA */