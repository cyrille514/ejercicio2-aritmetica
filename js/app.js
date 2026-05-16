// PASO1. Mapear los objetos (elementos) del HTML

// controles de formulario (value)
const NOTA_1 = document.getElementById("numero1");
const NOTA_2 = document.getElementById("numero2");
const NOTA_3 = document.getElementById("numero3");
//parrafos (innerHTML)
const SUMA_NOTAS1 = document.getElementById("nota1");
const SUMA_NOTAS2 = document.getElementById("nota2");
const SUMA_NOTAS3 = document.getElementById("nota3");
const TOTAL_NOTAS = document.getElementById("total");


 function calcular() {
     let res_total = (parseFloat(NOTA_1.value) + parseFloat(NOTA_2.value)  + parseFloat(NOTA_3.value))/3;
     TOTAL_NOTAS.innerHTML = `El resultado del premedio de ${NOTA_1.value} + ${NOTA_2.value} + ${NOTA_3.value} es ${res_total}`;

 }
 