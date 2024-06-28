/* -------------------------------------------------------------------------- */
/*                               📌 Named import                              */
/* -------------------------------------------------------------------------- */
import { nombre as nombreImportado, obtenerPosts } from "./namedExports";

console.log(`Mi nombre es ${nombreImportado}`);
console.log('%c⧭ Cada uno de los posts', 'color: #00e600', obtenerPosts());

/* -------------------------------------------------------------------------- */
/*                             📌 Namespace import                            */
/* -------------------------------------------------------------------------- */
// import * as datos from './namedExports';
// console.log(datos.nombre);
// console.log(datos.obtenerPosts);

/* -------------------------------------------------------------------------- */
/*                              📌 Default imports                              */
/* -------------------------------------------------------------------------- */
import obtenerUsuario from "./defaultExports";
console.log(obtenerUsuario());