import { logElementosArray } from "../../Tips/recursos.js";

console.log('\nFunciones de location');

const logs = [
    { etiqueta: 'URL de la página actual', valor: location.href },
    { etiqueta: 'Protocolo de la página actual', valor: location.protocol },
    { etiqueta: 'Host de la página actual', valor: location.hostname },
    { etiqueta: 'Puerto de la página actual', valor: location.port },
    { etiqueta: 'Ruta de la página actual', valor: location.pathname },
];

logElementosArray(logs, 'etiqueta', 'valor');

const cargarDocumento = () => {
    location.assign('https://google.com');
}

const irAdelante = () => {
    history.forward();
}