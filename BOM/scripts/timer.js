/**
    📌 windows.setTimeOut()
    Nos permite ejecutar una función después de cierto tiempo
*/

let id;
const iniciar = () => {
    id = setTimeout(() => {
        const saludo = 'Hola, Jordan';
        console.log('%c\n⧭ Saludo: ', 'color: #0088cc', saludo);
    }, 2000);
};

const parar = () => {
    const mensaje = 'Parando timer';

    clearTimeout(id);
    console.log('%c\n⧭ Mensaje de parada: ', 'color: #0088cc', mensaje);
};

/**
    📌 windows.setInterval()
    Nos permite ejecutar una función cada cierto tiempo hasta el infinito
*/
// let contadorRepeticionesSetInterval = 0
// let flagPararSetInterval = 3;

// let paraIntervalo = setInterval(() => {
//     if (contadorRepeticionesSetInterval == flagPararSetInterval) {
//         clearInterval(paraIntervalo);
//     }
//     console.log(`Hola ${++contadorRepeticionesSetInterval}`);
// }, 1000);
