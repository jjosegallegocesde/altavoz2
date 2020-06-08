//Entradas del formulario:
let boton = document.getElementById("btnRegistro");
let nombre = document.getElementById("nombreUsuario");


//Escuchar eventos (clic):
boton.addEventListener("click", validarFormulario);



//tags o etiquetas auxiliares
let ayudaNombre = document.getElementById("ayudaNombreUsuario");


//Definir Función para lanzar cuando el usuario haga clic
function validarFormulario(parametro) {
    parametro.preventDefault();

    if (nombre.value == "") {
        nombre.classList.add("is-invalid");
        ayudaNombre.textContent = "Por favor diligencia este campo antes de registrarte";
        ayudaNombre.classList.add("tituloRojo");

    } else {
        nombre.classList.remove("is-invalid");
        ayudaNombre.textContent = "";
        ayudaNombre.classList.remove("tituloRojo");
        alert("Gracias");
        //ejecutar el back end
    }


}