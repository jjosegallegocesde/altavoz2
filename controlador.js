//MODIFICANDO EL DOM:

/*let tituloApp = document.getElementById("nombreApp");
console.log(tituloApp);
let nombre = "Prueba";
tituloApp.textContent = "Bienvenida" + nombre;


let titulo1 = document.getElementById("titulo1");
titulo1.textContent = "EL FESTIVAL DE ROCK MAS GRANDE DEL MUNDO";
titulo1.classList.add("tituloRojo");


let busqueda = document.getElementById("busqueda");
busqueda.classList.add("is-invalid");
busqueda.classList.remove("is-invalid");
titulo1.classList.remove("tituloRojo");*/


//FUNCIONES:
//Haga un programa en js que salude (consola) a las personas por su nombre propio
/*let nombrePersona = "Madelen";
console.log("Hola como estas " + nombrePersona);

let nombrePersona2 = "Juan";
console.log("Hola como estas " + nombrePersona2);

let nombrePersona3 = "Yurany";
console.log("Hola como estas " + nombrePersona3);*/

//FUNCION de saludo:
/*console.log("*******************");

let nombre = "Daniel";
saludarpersonas(nombre);
saludarpersonas("Madelen");
saludarpersonas("Yurany")

function saludarpersonas(nombre) {
    console.log("¿Hola como estas? " + nombre);
}*/


//Funcion para calcular la edad (nacimiento, año actual)
calcularEdad(1989, 2020);
calcularEdad(1999, 2020);

function calcularEdad(nacimiento, actual) {
    let edad = actual - nacimiento;
    console.log("su edad es: " + edad);

}