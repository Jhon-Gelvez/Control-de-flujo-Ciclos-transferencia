// declaramos variables
let contrasena = "1234";
let usuario = "Jhon";
let intentos = 3;

while (intentos > 0) {
    // pedir datos al usuario
    let usuarioIngreso = prompt("ingrese su usuario");
    let contrasenaIngreso = prompt("ingrese su contrasena");

    // validar que los datos ingresados sean los mismos
    if (usuario == usuarioIngreso && contrasena == contrasenaIngreso) {
        // mostrar bienvenido
        alert("bienvenido");
        break;
    } else {
        intentos--;
    }
    if (intentos == 0) {
        // mostrar acceso denegado
        alert("acceso denegado");
    }
}
