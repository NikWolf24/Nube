import { deleteuser, loginauth, auth } from './Global.js'; // Corrige la importación del módulo Global.js

const deleteUserForm = document.getElementById('DeleteUser-Form');

// Manejar el evento de envío del formulario
deleteUserForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Autenticar al usuario con el correo y la contraseña ingresados
        await loginauth(email, password);

        // Eliminar al usuario autenticado
        await deleteuser(auth.currentUser);
        
        // Mostrar mensaje de éxito y redirigir a la página de inicio
        alert('Usuario eliminado exitosamente.');
        window.location.href = "/InicioIndex.html"; 
    } catch (error) {
        // Capturar y manejar cualquier error que ocurra durante el proceso
        console.error('Error al eliminar usuario:', error.message);
        alert('Error al eliminar usuario: ' + error.message);
    }
});

// Manejar el evento de clic en el botón "Atrás"
document.getElementById('backbtn').addEventListener('click', () => {
    window.location.href = "/InicioIndex.html";
});

// Manejar el evento de clic en el botón "Mostrar/Ocultar contraseña"
document.getElementById('show-password').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        // Cambiar a modo de texto para mostrar la contraseña
        passwordField.type = 'text';
        passwordField.classList.add('visible-password'); // Agrega una clase para ajustar el estilo
        this.textContent = 'Ocultar contraseña';
    } else {
        // Cambiar de vuelta al modo de contraseña oculta
        passwordField.type = 'password';
        passwordField.classList.remove('visible-password'); // Elimina la clase para restaurar el estilo original
        this.textContent = 'Mostrar contraseña';
    }
});