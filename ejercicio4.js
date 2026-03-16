// repetir 5 veces
for (let i = 1; i <= 5; i++) {
    // ingreso de las notas
    let nota1 = parseFloat(prompt("ingrese la primer nota del estudiante: "));
    let nota2 = parseFloat(prompt("ingrese la segunda nota del estudiante: "));
    let nota3 = parseFloat(prompt("ingrese la tercera nota del estudiante: "));
    // calclulo del promedio
    let total = nota1 + nota2 + +nota3;
    let promedio = total / 3;
    // validacion de la nota
    if (promedio >= 3.0) {
        alert("el estudiante aprobo");
    } else {
        alert("el estudiante reprobo");
    }
}
