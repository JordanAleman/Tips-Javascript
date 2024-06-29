console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

/**
    📌 window.open()
    Nos permite abrir ventanas del navegador
    Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

    - 1er parámetro: Dirección de la nueva ventana
    - 2do parámetro: Nombre de la ventana
    - 3er parámetro: Cadena de texto de opciones

    Nos devuelve un objeto para acceder a esa ventana
*/

let ventana;
let contadorVentanasVecesAbiertas = parseInt(localStorage.getItem('contadorVentanasVecesAbiertas')) || 0;

const abrirVentana = () => {
    contadorVentanasVecesAbiertas++;
    localStorage.setItem('contadorVentanasVecesAbiertas', contadorVentanasVecesAbiertas);
    if (ventana && !ventana.closed) {
        ventana.document.body.innerHTML = `<h1>Hola. Escribiendo en la nueva ventana</h1><p>El botón de abrirVentana ha sido pulsado ${contadorVentanasVecesAbiertas} veces.</p>`;
    } else {
        ventana = window.open('', 'Mi nueva ventana', 'width=500, height=500');
        ventana.document.write(`<h1>Hola. Escribiendo en la nueva ventana</h1><p>El botón de abrirVentana ha sido pulsado ${contadorVentanasVecesAbiertas} veces.</p>`);
    }
};


const cerrarVentana = () => {
    ventana.close();
};

/**
    📌 Screen Object
    Representa la pantalla del usuario.
*/

console.log('%c\n⧭ Ancho de la pantalla', 'color: #90f38b', window.screen.width);
console.log('%c⧭ Alto de la pantalla', 'color: #90f38b', window.screen.height);

console.log('%c\n⧭ Ancho de la pantalla sin barra de Windows', 'color: #4fa7fa', window.screen.availWidth);
console.log('%c⧭ Alto de la pantalla sin barra de Windows', 'color: #4fa7fa', window.screen.availHeight);

