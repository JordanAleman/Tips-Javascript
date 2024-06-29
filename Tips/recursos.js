// Ejemplo de un callback hecho por mí

// Función para loggear cada elemento del array con espacios dinámicos
export const logElementosArray = (array, etiquetaProp, valorProp) => {
    // Encontrar la longitud de la propiedad más larga en el array de objetos
    const obtenerLongitudMaxima = (array, getValor) => {
        return array.reduce((max, item) => Math.max(max, getValor(item).toString().length), 0);
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