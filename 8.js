// declaramos variables
let contrasena = "1234";
let usuario = "Jhon";
let intentos = 3;

while (intentos > 0) {
    let usuarioIngreso = prompt("ingrese su usuario");
    let contrasenaIngreso = prompt("ingrese su contrasena");
    if (usuario == usuarioIngreso && contrasena == contrasenaIngreso) {
        alert("bienvenido");
        break;
    } else {
        intentos--;
    }
    if (intentos == 0) {
        alert("acceso denegado");
    }
}
