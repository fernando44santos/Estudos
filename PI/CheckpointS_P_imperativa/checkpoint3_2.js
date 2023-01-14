//Passo 1 - Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
// Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 

// function Aluno (nome, faltas, notas){
//     this.nome=nome;
//     this.faltas=faltas;
//     this.notas=notas;
// }

// const aluno1 = new Aluno ("joão", 3, [5,5,5]);
// console.log(aluno1.notas)
// let soma=0;
// let media=0;
// let snotas=[];
// aluno1.mediafinal = function(){
//     for (let i = 0; i < this.notas.length; i++) {
//         soma+= snotas[i];
        
//     }
//     media = soma/this.notas.length
// }

// aluno1.mediafinal()
// console.log(aluno1.media)

let notas = [8,9,10,9]
// let media = 0;
// let soma = 0;
// for (let index = 0; index < notas.length; index++) {
//     soma+= notas[index];
    
// }
// media=soma/notas.length;
// cons;ole.log(media);
// numero(8)
// function numero(n){
//     n>=0;
// verdade = notas.some(numero);
// }
// console.log(verdade);

// Passo 3 - Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
// Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
// Passo 5 -Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.


// let nota = 12;
// const notaencontrada= notas.some(notas => notas === nota);
// console.log(notaencontrada);

// class Curso {
//     constructor(nomec, notaap, fmax, estudantes) {
//         this.nomec = nomec;
//         this.notaap =notaap;
//         this.fmax = fmax;
//         this.estudantes = estudantes;
//     }
//     cadastraraluno(nome, faltas, notas){

//         const novoaluno =new Aluno(nome, faltas, notas);
//         this.estudantes.push(novoaluno);
//     }



//     mediafinal(){
        
//     let soma=0;
//     let media=0;
//         for (let i = 0; i < this.notas.length; i++) {
//           soma+= this.notas [i];
         
//         }
//         media=soma/this.notas.length
//    return media;
//  }
//  maisfaltas(){
// let faltas= this.faltas;
// this.faltas = faltas ++;
//   return faltas;
//  }

 
//  aprovado(nomealuno){
  
//     let naluno = this.notas.some(nome => this.nome === nomealuno)
//   if (naluno = true){
//     return console.log(nomealuno);
//   }
// else {
// console.log("não encontrado")
// }
// }
// }
// const aluno1 = new Aluno ("Beatriz", 3, [7,7,7]);
// const aluno2 = new Aluno ("joão",2, [8,5.5,9] );
// const aluno3 = new Aluno ("Taylor", 10, [7,10,7]);
// const aluno4 = new Aluno ("Handerson",16, [7,6,8]);
// const aluno5 = new Aluno ("Mbappe",8, [4,4,7]);

// console.log(aluno1.aprovado("jj"))
class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas =faltas;
        this.notas = notas;
    }
    mediafinal(){
        
    let soma=0;
    let media=0;
        for (let i = 0; i < this.notas.length; i++) {
          soma+= this.notas [i];
         
        }
        media=soma/this.notas.length
   return media;
 }
 maisfaltas(){
let faltas= this.faltas;
this.faltas = faltas ++;
  return faltas;
 }

}
const aluno1 = new Aluno ("Beatriz", 3, [7,7,7]);
const aluno2 = new Aluno ("joão",2, [8,5.5,9] );
const aluno3 = new Aluno ("Taylor", 15, [7,10,7]);
const aluno4 = new Aluno ("Handerson",16, [7,6,8]);
const aluno5 = new Aluno ("Mbappe",8, [4,4,7]);
console.log(aluno1.nome,'= Média: ', aluno1.mediafinal(), ' Numero de faltas + 1: ',aluno1.maisfaltas());
console.log(aluno2.nome,'= Media: ', aluno2.mediafinal(), ' Numero de faltas + 1: ',aluno2.maisfaltas());
console.log(aluno3.nome,'= Media: ', aluno3.mediafinal(), ' Numero de faltas + 1: ',aluno3.maisfaltas());
console.log(aluno4.nome,'= Media: ', aluno4.mediafinal(), ' Numero de faltas + 1: ',aluno4.maisfaltas());
console.log(aluno5.nome,'= Media: ', aluno5.mediafinal(), ' Numero de faltas + 1: ',aluno5.maisfaltas());
const estudantes = [];



estudantes.push(aluno1, aluno2, aluno3, aluno4, aluno5);

let curso = {
    nome_curso:"Calculo A",
    nota_ap: 7,
    faltas_max: 15,
    discente: estudantes,
  
    cadastraraluno(nome, faltas, notas){
  
        const novoaluno =new Aluno(nome, faltas, notas);
        this.discente.push(novoaluno);
  
      },
     
  
      aprovado(aluno){
        let soma =  aluno.notas.reduce ((acc, nota)=> {return acc + nota})
        let mediafinal= soma/ aluno.notas.length;
         const mediadezpct = ((this.nota_ap * 0.1)+this.nota_ap);

      
        if (mediafinal >= this.nota_ap & aluno.faltas < this.faltas_max  ){
        return true;
      }
        else if (mediafinal >= mediadezpct & aluno.faltas === this.faltas_max) {
        return true;
      }
        else {
        return false;
      }
      },

      // resultados() {
      //   return this.discente.map((aluno) => this.aprovado(aluno));
      // },
    
      // 
      resustados() {
        let listResultados = [];
        for(i = 0; i < this.discente.length; i += 1) {
          listResultados.push(this.aprovado(this.discente[i]))
        };
        return listResultados;
      }
      }
      
  
  console.log(curso.resustados());
  
  // soma = curso.estudantes.notas.reduce((acc,valorAtual) => acc + valorAtual,0);
  // const media2 = soma/numeros2.length;
  
  // curso.cadastraraluno("caio", 7 ,[7,8,5]);
  // console.log(curso.estudantes);
  // console.log(curso.aprovado(aluno1).mediadezpct);
  console.log(curso.aprovado(aluno3));
  console.log(curso.aprovado(aluno4));
  console.log(curso.aprovado(aluno5));
  //console.log(curso.resultados(curso.discente));



  // console.log(media2);
  // console.log(curso.estudantes.Aluno)
 
// let media=0;
// let qtd_faltas_tt=0;
// const aluno1 = new Aluno ("fulano1", 3, [5,5,5]);

// function Aluno (nome, qtd_faltas, notas) {
//     this.nome = nome;
//     this.qtd_faltas = qtd_faltas;
//     this.notas = notas;

//     this.calcularMedia = function (){
//         return this.notas/3;
//     }
//     this.faltas = function(){
//         return qtd_faltas_tt = this.qtd_faltas+1;
//     }
// }

// console.log("Media= ",this.calcularMedia, "","Faltas= ", qtd_faltas_tt );
// console.log(aluno1);

// class Aluno {
//   constructor(nome, faltas, notas) {
//       this.nome = nome;
//       this.faltas =faltas;
//       this.notas = notas;
//   }
//   mediafinal(){
      
//   let soma=0;
//   let media=0;
//       for (let i = 0; i < this.notas.length; i++) {
//         soma+= this.notas [i];
       
//       }
//       media=soma/this.notas.length
//  return media;
// }
// maisfaltas(){
// let faltas= this.faltas;
// this.faltas = faltas ++;
// return faltas;
// }

// }
// const aluno1 = new Aluno ("Beatriz", 3, [7,7,7]);
// const aluno2 = new Aluno ("joão",2, [8,5.5,9] );
// const aluno3 = new Aluno ("Taylor", 10, [7,10,7]);
// const aluno4 = new Aluno ("Handerson",16, [7,6,8]);
// const aluno5 = new Aluno ("Mbappe",8, [4,4,7]);
// console.log(aluno1.nome,'= Média: ', aluno1.mediafinal(), ' Numero de faltas: ',aluno1.maisfaltas());
// console.log(aluno2.nome,'= Media: ', aluno2.mediafinal(), ' Numero de faltas: ',aluno2.maisfaltas());
// console.log(aluno3.nome,'= Media: ', aluno3.mediafinal(), ' Numero de faltas: ',aluno3.maisfaltas());
// console.log(aluno4.nome,'= Media: ', aluno4.mediafinal(), ' Numero de faltas: ',aluno4.maisfaltas());
// console.log(aluno5.nome,'= Media: ', aluno5.mediafinal(), ' Numero de faltas: ',aluno5.maisfaltas());



// // Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
// // Passo 5 -Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
// let curso = {
// nome_curso:"Calculo A",
// nota_ap: 7,
// faltas_max:15,
// estudantes:[{nome:"Beatriz", faltas:3, notas:[7,7,7]}, 
//             {nome:"João", faltas:2, notas:[8, 5.5,9]}, 
//             {nome:"Taylor", faltas:10, notas:[7,10,7]}, 
//             {nome:"Handerson", faltas:16, notas:[7,7,7]}, 
//             {nome:"Mbappe", faltas:8, notas:[7,7,7]}
//           ],

// cadastraraluno(nome, faltas, notas){

//     const novoaluno =new Aluno(nome, faltas, notas);
//     this.estudantes.push(novoaluno);

//   },

//   aprovado(nomealuno){

//     let naluno = this.estudates.some(estudantes => estudantes.nome === nomealuno)
//   if (naluno = true){
//     return console.log(nomealuno);
//   }
// else {
// console.log("não encontrado")
// }

//     if (media <=7 && faltas <=15 )
//     console.log("Aprovado")

//   }

// };
// // soma = curso.estudantes.notas.reduce((acc,valorAtual) => acc + valorAtual,0);
// // const media2 = soma/numeros2.length;

// // curso.cadastraraluno("caio", 7 ,[7,8,5]);
// // console.log(curso.estudantes);
// curso.aprovado("Beatriz")
// // console.log(media2);
// console.log(this.estudantes.nome)