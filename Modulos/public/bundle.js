'use strict';

const nombre = 'Jordan';

const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};

/* -------------------------------------------------------------------------- */
/*                               📌 Named import                              */
/* -------------------------------------------------------------------------- */
// import { nombre as nombreImportado, obtenerPosts } from "./namedExports";

console.log(nombre);
console.log(obtenerPosts);
