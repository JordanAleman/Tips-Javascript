let pagina = 1;

const btnAnterior = document.querySelector('#btnAnterior');
const btnSiguiente = document.querySelector('#btnSiguiente');

const contenedorPeliculas = document.getElementById('contenedorPeliculas');


btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		console.log('%c⧭', 'color: #00bf00', pagina);

		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
  console.log('%c⧭', 'color: #00bf00', pagina);
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
		    console.log('%c⧭', 'color: #917399', 'Respuesta correcta');

			const datos = await respuesta.json();
   			console.log('%c⧭', 'color: #731d1d', datos);
			
			datos.results.forEach(pelicula => crearListaPelicula(pelicula.poster_path, pelicula.title, datos.results.length));
			contenedorPeliculas.innerHTML = peliculas;

			document.querySelectorAll('.pelicula').forEach((pelicula, index) => {
				pelicula.addEventListener('mouseover', () => anidarModal(pelicula, datos.results[index].title, datos.results[index].overview));
			});

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();
