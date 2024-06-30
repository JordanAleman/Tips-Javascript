/* --------------------------------- Imports -------------------------------- */
import dataFotos from "./data/fotos";

/* --------------------------- Constantes del DOM --------------------------- */
const contenedorCategorias = document.querySelector('#categorias');
const contenedorGaleria = document.querySelector('#galeria');

/* -------------------------------------------------------------------------- */
/*                                  Funciones                                 */
/* -------------------------------------------------------------------------- */
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    // Comprueba si el elemento 'a' más cercano tiene el atributo name="categoriaName"
    const categoriaLink = e.target.closest('a');

    if (!categoriaLink) return;

    contenedorGaleria.classList.add('galeria--active');
    document.body.style.overflow = 'hidden';

    const categoriaActiva = e.target.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];

    console.log(fotos);
    fotos.forEach(foto => {
        console.log(foto);
    });

    
});