let continuar;

do {
    //  le pedimos el numero al usuario
    let numero = parseInt(prompt("¿De qué número deseas ver la tabla de multiplicar?"));

    if (!isNaN(numero)) {
        console.log(`--- Tabla del ${numero} ---`);
        
        //  iniciamos el ciclo
        for (let i = 1; i <= 12; i++) {
            let resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }

    //  Preguntamos si desea realizar otra consulta
    continuar = prompt("¿Deseas consultar otra tabla? (si/no)").toLowerCase();

} while (continuar === "si" || continuar === "s");

console.log("Gracias por usar el programa.");