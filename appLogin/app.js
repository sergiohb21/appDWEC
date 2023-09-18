const botonIniciarSesion = document.getElementById('iniciar-sesion');

botonIniciarSesion.addEventListener('click', () => {
    const usuario       = document.getElementById('usuario');
    const contraseña    = document.getElementById('contraseña');

    const validarUsuario    = usuario.value;
    const validarContraseña = contraseña.value;

    if( validarUsuario === 'root' && validarContraseña === '1234'){
        window.location.href = '../aterrizaje.html';
    }else{
        usuario.style.border     = "5px solid red";
        contraseña.style.border  = "5px solid red";
        alert('Usuario y/o clave erronea')
    }
});