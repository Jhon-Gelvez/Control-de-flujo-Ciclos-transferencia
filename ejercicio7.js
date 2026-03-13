// declaramos variables
let numero;
let pares = 0;
let impares = 0;

// bucle para preguntar 10 veces
for (let i = 1; i <= 10; i++) {
    // el usuario ingresa el numero
    numero = parseFloat(prompt("ingrese un numero"));
    // si es par, sube el contador
    if (numero % 2 == 0) {
        pares++;
        // si no, suben los impares
    } else {
        impares++;
    }
}
// mostrar el mensaje al usuario
alert(`numeros pares ingresados ${pares} numeros impares ingresados ${impares}`);
