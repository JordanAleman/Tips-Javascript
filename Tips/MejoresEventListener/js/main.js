const lista = document.querySelector('#lista');
let botonElemento = document.getElementsByName("botonElemento");

const btnAgregar = document.querySelector('#btn-agregar');

// const aparecerCheck = () => {
//     botonElemento.forEach((elemento, index) => {
//         elemento.addEventListener('click', (e) => {
//             elemento.classList.toggle("activo");
//             console.log('%c⧭', 'color: #00a3cc', elemento.tagName, index);
//             console.log('%c⧭', 'color: #00a3cc', e.target.tagName, index);
//         });
//     });
// };

// aparecerCheck();


lista.addEventListener('click', (e) => {
    console.log('%c⧭', 'color: #aa00ff', e.target.tagName);

    if (e.target.tagName === 'A') {
        e.target.classList.toggle("activo"); 
    }
});

btnAgregar.addEventListener('click', () => {
    lista.innerHTML += 
    `
        <a href="#" name="botonElemento">
            Elemento <i class="bi bi-check-square-fill"></i>
        </a>
    `;

    // console.log('');

    // botonElemento.forEach((elemento, index) => {
    //     console.log('%c%s', 'color: #ff0000',elemento, index)
    // });

    // console.log('');

    // aparecerCheck();

});




