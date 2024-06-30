/* --------------------------------- Imports -------------------------------- */
import dataFotos from "./data/fotos";

/* --------------------------- Constantes del DOM --------------------------- */
const contenedorCategorias = document.querySelector('#categorias');
const contenedorGaleria = document.querySelector('#galeria');
const galeriaCarouselSlides = document.querySelector('.galeria__carousel-slides');


/* -------------------------------------------------------------------------- */
/*                                  Funciones                                 */
/* -------------------------------------------------------------------------- */
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    // Comprueba si el elemento 'a' más cercano tiene el atributo name="categoriaName"
    const categoriaLink = e.target.closest('a');

    if (!categoriaLink) return;

    activarGaleria();

    const categoriaActiva = categoriaLink.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];

    fotos.forEach(foto => {
        const slide = `
            <a href="#" class="galeria__carousel-slide">
                <img
                class="galeria__carousel-image"
                src="${foto.ruta}"
                alt=""
                />
            </a>
        `;

        galeriaCarouselSlides.innerHTML += slide;
    });

    document.querySelectorAll(".galeria__carousel-slide")[0].classList.add('galeria__carousel-slide--active');
});

const activarGaleria = () => {
    contenedorGaleria.classList.add('galeria--active');
    document.body.style.overflow = 'hidden';
};