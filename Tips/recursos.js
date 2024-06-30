// Ejemplo de un callback hecho por mí

/**
 * Loggea cada elemento del array con un formato específico, añadiendo espacios dinámicos 
 * para alinear la salida en la consola.
 * 
 * @param {Array<Object>} array - El array de objetos a procesar.
 * @param {string} etiquetaProp - El nombre de la propiedad que se usará como etiqueta.
 * @param {string} valorProp - El nombre de la propiedad cuyo valor se mostrará en el log.
 */
export const logElementosArray = (array, etiquetaProp, valorProp) => {
    /**
     * Encuentra la longitud de la propiedad más larga en el array de objetos.
     * 
     * @param {Array<Object>} log - El array de objetos a procesar.
     * @param {function(Object): string} getValor - Función que devuelve el valor de la propiedad a medir.
     * @returns {number} La longitud máxima de la propiedad especificada en el array de objetos.
     */
    const obtenerLongitudMaxima = (log, getValor) => {
        return log.reduce((max, item) => Math.max(max, getValor(item).toString().length), 0);
    };

    // Obtener la longitud máxima de la propiedad de etiquetaProp
    const longitudMaxima = obtenerLongitudMaxima(array, item => item[etiquetaProp]);

    // Iterar sobre cada elemento del array y loggearlo
    array.forEach(item => {
        const etiqueta = item[etiquetaProp];
        const valor = item[valorProp];
        const espacios = ' '.repeat(Math.max(0, longitudMaxima - etiqueta.toString().length + 5));
        console.log(`%c⧭ ${etiqueta}${espacios}`, 'color: #8df936', valor);
    });
};
