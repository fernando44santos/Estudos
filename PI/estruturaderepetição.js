//let participanteA = [5, 8, 4, 9, 5];
//(5 + 8 + 4 + 9 + 5)/5//

//const somaA = (participanteA[0] + participanteA[1] + participanteA[2] + participanteA[3] + participanteA[4]);
//const mediaA = soma/participanteA.length;//
/*/
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

var soma = 0;
var i;
let participante;
function pontuacaoMedia(participante){

  for (i=0; i< participanteB.length; i++){
    soma += participanteB[i];
}
  
  /*
    loop para realizar a soma
  
  return soma/participanteB.length;
 
}
console.log(pontuacaoMedia)

function pontuacaoMaior(participantea){
  // o maior elemento do array;
}
*/
var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;

for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}

console.log(soma);