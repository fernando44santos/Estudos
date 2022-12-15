 //Passo 1 - Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
// Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 


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

// Passo 3 - Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
// Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
// Passo 5 -Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
// passo 6 -Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 



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

    resultados() {
      return this.discente.map((aluno) => this.aprovado(aluno));
    },
  


};



curso.cadastraraluno("caio", 7 ,[7,8,5]);
console.log(curso.aprovado(aluno3));
console.log(curso.aprovado(aluno4));
console.log(curso.aprovado(aluno5));
console.log(curso.resultados());
