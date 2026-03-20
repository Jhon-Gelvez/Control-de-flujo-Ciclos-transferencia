let continuar = true;

while (continuar) {
    let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
    let resultado = "Tabla del " + numero + ":\n";

    for (let i = 1; i <= 12; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(resultado);

    let respuesta = prompt("¿Quieres consultar otra tabla? (si/no)");

    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}