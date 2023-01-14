// // let prato = 7;
// let tempo = 5;

// if (prato >= 1 && prato <= 5 && tempo >= 0) {

//     if (prato == 1 && tempo >= 10 && tempo < 20 || prato == 2 && tempo > 8 && tempo < 16 || prato == 3 && tempo <= 15 && tempo < 30 || prato == 4 && tempo <= 12 && tempo < 24 || prato == 5 && tempo <= 8 && tempo < 16) {

//  }
//  console.log("Tempo insufuciente")
// // }
// var z=0;
// for (let index = 20; index <50; index+=10) {
//    z+=index;
    
// }
// console.log(z);
// for (let index = 0; index <50; index+=10) {

//  console.log(index);}
//  console.log(index);

// let valor=5;
// let fatorial=1
// for (let i=valor; i>1; i--){
//     fatorial*=i;}
//     console.log("fatorial= "+fatorial)

// function soma (a=1, b=3){
//     return a+b;}
//     console.log(soma());
//     console.log(soma(3));
//     console.log(soma(1,2));

// let x=5;
// let y = x++ + ++x;
// console.log("y =" +y);
// x=3;
// y=x*(x+1)*x++;
// x=5;
// y=3;
// y*= x+1
// console.log("x= "+x);
// console.log("y= "+y);
// let result;

// result= function multi (numero){
//     return numero*numero;
// };

// let x = result(2);
// console.log(x);
let array=[1,2,1,1,2,1,2,1,2];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log (element);
}

let soma=0;
let media=0
  let array2=[50,100];
  for (let index = 0; index < array2.length; index++) {
      soma += array2[index];
      media = soma/array2.length;
  }
  console.log (media);