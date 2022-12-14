//Passo 1 - Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
// Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
// Passo 3 - Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
// Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
// Passo 5 -Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

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
const aluno3 = new Aluno ("Taylor", 10, [7,10,7]);
const aluno4 = new Aluno ("Handerson",16, [7,6,8]);
const aluno5 = new Aluno ("Mbappe",8, [4,4,7]);
console.log(aluno1.nome,'= Média: ', aluno1.mediafinal(), ' Numero de faltas: ',aluno1.maisfaltas());
console.log(aluno2.nome,'= Media: ', aluno2.mediafinal(), ' Numero de faltas: ',aluno2.maisfaltas());
console.log(aluno3.nome,'= Media: ', aluno3.mediafinal(), ' Numero de faltas: ',aluno3.maisfaltas());
console.log(aluno4.nome,'= Media: ', aluno4.mediafinal(), ' Numero de faltas: ',aluno4.maisfaltas());
console.log(aluno5.nome,'= Media: ', aluno5.mediafinal(), ' Numero de faltas: ',aluno5.maisfaltas());



// Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
// Passo 5 -Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
let curso = {
  nome_curso:"Calculo A",
  nota_ap: 7,
  faltas_max:15,
  estudantes:[{nome:"Beatriz", faltas:3, notas:[7,7,7]}, 
              {nome:"João", faltas:2, notas:[8, 5.5,9]}, 
              {nome:"Taylor", faltas:10, notas:[7,10,7]}, 
              {nome:"Handerson", faltas:16, notas:[7,7,7]}, 
              {nome:"Mbappe", faltas:8, notas:[7,7,7]}
            ],

  cadastraraluno(nome, faltas, notas){

      const novoaluno =new Aluno(nome, faltas, notas);
      this.estudantes.push(novoaluno);

    },

    aprovado(nomealuno){
  
      let naluno = this.estudates.some(estudantes => estudantes.nome === nomealuno)
    if (naluno = true){
      return console.log(nomealuno);
    }
else {
  console.log("não encontrado")
}

      if (media <=7 && faltas <=15 )
      console.log("Aprovado")

    }

};
// soma = curso.estudantes.notas.reduce((acc,valorAtual) => acc + valorAtual,0);
// const media2 = soma/numeros2.length;

// curso.cadastraraluno("caio", 7 ,[7,8,5]);
// console.log(curso.estudantes);
curso.aprovado("Beatriz")
// console.log(media2);
console.log(this.estudantes.nome)
