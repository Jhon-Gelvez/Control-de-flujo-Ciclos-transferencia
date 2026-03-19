//  Generamos el número aleatorio 
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intento;

console.log("¡Bienvenido al juego de adivinar el número!");

// iniciamos el ciclo 
while (intento !== numeroSecreto) {
    intento = parseInt(prompt("Introduce un número entre 1 y 20:"));

    if (intento < numeroSecreto) {
        alert("El número secreto es MAYOR. ¡Sigue intentando!");
    } else if (intento > numeroSecreto) {
        alert("El número secreto es MENOR. ¡Casi lo tienes!");
    } else if (intento === numeroSecreto) {
        alert("¡FELICIDADES! Has adivinado el número.");
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}