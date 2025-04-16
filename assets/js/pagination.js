// ================ PAGINATION FACULTADES ================
const prevButton = document.querySelector('.before-slide'); 
const nextButton = document.querySelector('.after-slide'); 
const contenedorFacultades = document.querySelector('.contenedor-facultad');
const desplazamiento = 353;  // Definir el desplazamiento (ajústalo según el tamaño de cada facultad)
function desplazarFacultades(direccion) {
    // Fijar la posición al múltiplo más cercano del desplazamiento
	// Cuando el usuario manipula el scroll para volver a la normalidad para que cuando el usuario apreta los botoenes
    contenedorFacultades.scrollLeft = Math.round(contenedorFacultades.scrollLeft / desplazamiento) * desplazamiento;
    
    // Aplicar el desplazamiento
    contenedorFacultades.scrollBy({ left: direccion * desplazamiento, behavior: "smooth" });
}

prevButton.addEventListener("click", () => desplazarFacultades(-1));
nextButton.addEventListener("click", () => desplazarFacultades(1));


// ================ PAGINATION UNU INFORMA ================
const newsContainer = document.getElementById("newsContainer");
const paginationDots = document.getElementById("paginationDots");
const newsItems = document.querySelectorAll(".box-news");

const itemsPerView = 2; // Cantidad de noticias visibles por pantalla
const totalPages = Math.ceil(newsItems.length / itemsPerView); // Número total de páginas (dots)

// Crear los dots dinámicamente según las páginas
function createDots() {
    paginationDots.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("dot-active"); // Primer dot activo
        dot.addEventListener("click", () => scrollToPage(i));
        paginationDots.appendChild(dot);
    }
}

// Función para desplazarse a la página correspondiente
function scrollToPage(pageIndex) {
    let scrollPosition = pageIndex * newsContainer.clientWidth;
    newsContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
    updateDots(pageIndex);
}

// Función para actualizar los puntos según el desplazamiento
function updateDots(index = null) {
    let scrollLeft = newsContainer.scrollLeft;
    let sectionWidth = newsContainer.clientWidth;

    let currentPage = index !== null ? index : Math.round(scrollLeft / sectionWidth);

    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot-active"));
    document.querySelectorAll(".dot")[currentPage].classList.add("dot-active");
}

// Detectar el desplazamiento
newsContainer.addEventListener("scroll", () => updateDots());

// Ejecutar la función para crear dots dinámicos al cargar
createDots();