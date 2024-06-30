/* --------------------------------- Imports -------------------------------- */
import dataCategorias from "./data/categorias";

/* --------------------------- Constantes del DOM --------------------------- */
const contenedorCategorias = document.querySelector('#categorias');

/* --------------------------- Variables generales -------------------------- */
const { categorias } = dataCategorias;

/* -------------------------------------------------------------------------- */
/*                                  Funciones                                 */
/* -------------------------------------------------------------------------- */
categorias.forEach((categoria) => {
  contenedorCategorias.innerHTML += `
          <a href="#" class="categoria" data-categoria="${categoria.id}" name="categoriaName">
            <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
            </div>
          </a>
    `;
});
