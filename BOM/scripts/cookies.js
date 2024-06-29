const crearCookie = () => {
    document.cookie = 'nombre=Jordan; expires= 29 Jun 2024 02:27:00 UTC';
};

const iniciarSesion = () => {
  const usuario = prompt('Usuario:');

  document.cookie = `nombre=${usuario}`;
}

console.log(document.cookie);
