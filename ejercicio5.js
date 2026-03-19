let total = 0;
let seguir = "si";

while (seguir === "si") {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    
    // Sumamos el precio al total acumulado
    total = total + precio;

    seguir = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
}

// Aplicamos el descuento solo si el total es mayor a 100.000
if (total > 100000) {
    total = total * 0.90; // Esto resta el 10% automáticamente
    console.log("¡Se aplicó un descuento del 10%!");
}

console.log("El total a pagar es: $" + total);