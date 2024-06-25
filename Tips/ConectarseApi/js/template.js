const botonModal = document.querySelector('#botonModal');
const modalPelicula = document.querySelector('#modalPelicula');


let peliculas = '';
let nuevaPagina = 0;

const crearListaPelicula = (poster_path, title, restart) => {
    if (nuevaPagina < restart) nuevaPagina++;
    else {
        nuevaPagina = 1;
        peliculas = '';
    }

    peliculas += `
					<div class="pelicula" >
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}">
						<h3 class="titulo">${title}</h3>
					</div>
				`;

};



function controlDescripcion(overview) {
    if (overview == '') return 'Aún no hay descripción'
    else return overview;
}

const anidarModal = (pelicula, title, overview) => {
    pelicula.setAttribute('data-bs-toggle', 'modal');
    pelicula.setAttribute('data-bs-target', '#exampleModal');

    modalPelicula.innerHTML = 
        `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${controlDescripcion(overview)}</p>
                        </div>
                    </div>
                </div>
            </div>
    `
};