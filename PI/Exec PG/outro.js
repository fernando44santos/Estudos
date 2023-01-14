// Crie uma função construtora ou Classe Aluno que tenha como atributos:
//  nome (string), quantidade de faltas (number) e notas (array de números).

function registro(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  
    // Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado
    //  faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.
  
    this.Media = () => {
      let nota = 0;
      for (let i = 0; i < this.notas.length; i++) {
        nota += this.notas[i];
      }
      return +(nota / this.notas.length).toFixed();
    };
    this.falta = () => {
      this.faltas += 1;
    };
  }
  const aluno1 = new registro("Xuxa", 6, [7, 6, 9]);
  const aluno2 = new registro("Gugu", 3, [8, 5, 19]);
  const aluno3 = new registro("Fausto", 2, [6, 10, 4]);
  const aluno4 = new registro("Silvio", 3, [5, 5, 7]);
  const aluno5 = new registro("Chavez", 0, [9, 8, 10]);
  const historico = [];
  
  historico.push(aluno1, aluno2, aluno3, aluno4, aluno5);
  console.log(aluno1.Media());
  
  // crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number),
  // faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
  
  const curso = {
    nome: "Java",
    notaAprovacao: 5,
    faltasMaximas: 3,
    lista: historico,
  
    // Crie o método que permite adicionar alunos à lista do curso,
    // ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
  
    adicionarAluno(nome, faltas, notas) {
      let novoEstudante = new registro(nome, faltas, notas);
      this.lista.push(novoEstudante);
    },
  
    // Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false
    //  em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos
    //   faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
  
    situacao(aluno) {
      let media = (
        aluno.notas.reduce((acc, nota) => {
          return acc + nota;
        }) / aluno.notas.length
      ).toFixed();
  
      if (media >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
        return true;
      } else if (
        media >= this.notaAprovacao &&
        aluno.faltas == this.faltasMaximas
      ) {
        let porcentagemAprovado = this.notaAprovacao * 1.1;
        if (media >= porcentagemAprovado) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  //   Crie um método para o objeto curso que percorra a lista de estudantes e 
  //   retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
  
  
  situacaoFinal(){
      let arrayFinal = []
      this.lista.forEach((estudante, index)=>{
          arrayFinal[index] = this.situacao(estudante);
          return arrayFinal;
      });
  
      return arrayFinal;
  
  
  }
  
  };
  console.log(curso.situacao(aluno2));
  console.log(curso.situacaoFinal(curso.lista));