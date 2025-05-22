document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".group-button-navbar");
    const seccion1 = document.getElementById("contenedor-header"); // Sección que oculta el menú
    const seccion2 = document.getElementById("contenedor-misionvision"); // Sección que oculta el menú
    const seccion3 = document.getElementById("contenedor-footer"); // Sección que lo muestra otra vez

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.target.id === "contenedor-misionvision" && entry.isIntersecting) {
                    menu.style.transform = "translateY(-200%)"; // Ocultar
                }
                if (entry.target.id === "contenedor-footer" ||
                    entry.target.id === "contenedor-header" && entry.isIntersecting) {
                    menu.style.transform = "translateY(100%)"; // Mostrar
                }
            });
        },
        { threshold: 0.5 } // Detecta cuando el 50% del div es visible
    );

    observer.observe(seccion1);
    observer.observe(seccion2);
    observer.observe(seccion3);

    toggleMenu();


    // ===== EVENTO PARA DESPLEGAR LOS ITEMS, SUBITEMS. SUB-SUBITEMS
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling; // el vid de clase "Content"
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    // ==================================================
    }
});



function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const btnOpenMenu = document.querySelector('#btn-menu');
    const btnCloseMenu = document.querySelector('.btn-closemenu');
    const fondo = document.querySelector('.fondo-black');
    btnOpenMenu.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
        fondo.classList.add('offcanvas-backdrop', 'fade', 'show');
        document.body.style.overflow = 'hidden';
    });

    btnCloseMenu.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
        fondo.classList.remove('offcanvas-backdrop', 'fade', 'show');
        document.body.style.overflow = 'auto'; // o '' para dejar que el CSS lo controle
    });

};