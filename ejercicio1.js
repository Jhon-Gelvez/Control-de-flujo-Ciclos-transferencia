
console.log("Números primos entre 1 y 50:");

for (let i = 2; i <= 50; i++) {
    let esPrimo = true;

    // Un número es primo si solo es divisible por 1 y por sí mismo.
    // Verificamos si tiene algún divisor entre 2
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            esPrimo = false; // Se encontró un divisor, no es primo
            break; 
        }
    }

    if (esPrimo) {
        console.log(i);
    }
}