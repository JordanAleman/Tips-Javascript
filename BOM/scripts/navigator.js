let cookiesNavigator = navigator.cookieEnabled;
let lenguajeNavegador = navigator.language;
let conectadoAInternet = navigator.onLine;

console.log('\nFunciones de navigator');

console.log('%c⧭ ¿Cookies activadas?\t', 'color: #fa9324', cookiesNavigator);
console.log('%c⧭ Lenguaje navegador:\t', 'color: #fa9324', lenguajeNavegador);
console.log('%c⧭ ¿Conexión a Internet?:\t', 'color: #fa9324', conectadoAInternet);