function soma (num1=0, num2=0, num3=0){
    const resultado1=num1 + num2 + num3;
    return resultado1;
}
let resultsoa=soma (3, 5, 2);

function subtração (num1=0, num2, num3=0) {
    const resultado2=num1 - num2 - num3;
    return resultado2;

}

let rsubtracao=subtração (-3, 5, 2);

function multiplicacao (num1=0, num2, num3=0) {
    const resultado3=num1*num2*num3;
    return resultado3;

}
let resultmultiplicacao=multiplicacao (4, 5, 0.5);

function divisao (num1=0, num2, num3=0) {
    const resultado4=num1/num2/ num3;
    return resultado4;

}
let resultdivisao=divisao (100, 5, 2);
console.log("Teste calcuradora / Resultados, Soma=",resultsoa, " Subtração=", rsubtracao, " Multiplicação=", resultmultiplicacao, " Divisão=", resultdivisao );