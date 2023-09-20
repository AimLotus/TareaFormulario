document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cliente-form");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const fechanac = document.getElementById("fechanac").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        // Validar que las contraseñas coincidan
        if (password !== password2) {
            mensaje.textContent = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
            mensaje.style.display = "block";
        } else {
            // Aquí puedes realizar las acciones que desees con los datos del cliente, como enviarlos a un servidor o guardarlos en una base de datos.
            // Por ahora, mostraremos un mensaje de confirmación.
            const mensajeConfirmacion = `Cliente ${nombre} ha sido guardado.`;
            mensaje.textContent = mensajeConfirmacion;
            mensaje.style.display = "block";
        }
    });
});
