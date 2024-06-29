/**
    📌 Alerta
    Para informa al usuario de algo.
*/
// alerta('Hola usuario!');

/**
    📌 Ventana de confirmación
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/
const ingresar = () => {
    (confirm('¿Eres mayor de edad?'))
        ? alert('Bienvenido!')
        : alert('Le vamos a decir a tus padres!');
};

/**
    📌 Ventana con input
    Una ventana donde el usuario puede introducir un valor.
    Retorna una cadena de texto con la respuesta del usuario.
*/

const saludar = () => {
    const nombre = prompt('Escriba su nombre');
    alert(`Bienvenido ${nombre}`);
};