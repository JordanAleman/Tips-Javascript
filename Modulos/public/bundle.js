'use strict';

const nombre = 'Jordan';

const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};

var obtenerUsuario = () => {
    return {
        nombre: 'Jordan',
        correo: 'miCorreo@correo.com'
    };
};

/* -------------------------------------------------------------------------- */
/*                               📌 Named import                              */
/* -------------------------------------------------------------------------- */

console.log(`Mi nombre es ${nombre}`);
console.log('%c⧭ Cada uno de los posts', 'color: #00e600', obtenerPosts());
console.log(obtenerUsuario());
