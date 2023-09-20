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

        if (password !== password2) {
            mensaje.textContent = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
            mensaje.style.display = "block";
        } else { 
            const mensajeConfirmacion = `Usuario ${nombre} ha sido guardado.`;
            mensaje.textContent = mensajeConfirmacion;
            mensaje.style.display = "block";
        }
    });
});
