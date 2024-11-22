// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Datos de usuario predefinidos (puedes cambiarlos)
    const validUsername = "kevin";
    const validPassword = "73852622";

    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso!");
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
        window.location.href = "paginas secundarias/paginadeinicio.html"; // Ejemplo de redirección
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
});