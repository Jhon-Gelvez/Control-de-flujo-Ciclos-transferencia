// saldo definido en una constante
const saldo = 100;
let saldoActual = saldo;

while (saldoActual > 0) {
    // preguntarle al usuario si dedesa retirar
    let valorRetiro = parseInt(prompt(`su saldo inicial es ${saldo}, su saldo actual es ${saldoActual} cuanto desea retirar `));
    if (saldoActual < valorRetiro) {
        alert("fondos insuficientes");
        // detener ejecucion
        break;
    }

    // restar a su saldo
    saldoActual -= valorRetiro;
}
