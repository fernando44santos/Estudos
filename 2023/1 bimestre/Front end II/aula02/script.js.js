function PedraPTes() {
   return Math.floor(Math.random() * 3)
    // 0 = pedra; 1 = papel; 2 = tesoura.
}

function getPedraPTes(opcao) {
    if (opcao === 0) {
        return "pedra"
    }

    else if (opcao === 1) {
        return "papel"
    }

    else {
        return "tesoura"
    }
}

function game() {
    // qtd de rdds
    const numR = parseInt(prompt("Quantas rodadas você quer jogar?"))
    let pontuação = 0;
    let pontuaçãomaquina = 0;

    for (let i = 0; i < numR; i++) {
        const opcao = PedraPTes(); // retorna uma das tres opções utilizando a função do inicio PedraPTes()
        const result = getPedraPTes(opcao); // converte o resultado acima
        const jogadausuario = prompt('Pedra, papel ou tesoura?')

        // vericar resultado do jogo
        if (jogadausuario.toLowerCase() === result.toLowerCase()) {
            // empate 
            console.log(`Você jogou ${jogadausuario} e a maquina tembem jogou ${result}. Portando empate`)
        }

        else if (jogadausuario.toLowerCase() === "pedra" && result.toLowerCase() == "tesoura") {
            // vitoria
            pontuação++
            console.log(`Você jogou ${jogadausuario} e a maquina  jogou ${result}. Você marcou um ponto`)
        }

        else if (jogadausuario.toLowerCase() === "papel" && result.toLowerCase() == "pedra") {
            // vitoria
            pontuação++
            console.log(`Você jogou ${jogadausuario} e a maquina jogou ${result}. Você marcou um ponto`)
        }
        else if (jogadausuario.toLowerCase() === "tesoura" && result.toLowerCase() == "papel") {
            // vitoria
            pontuação++
            console.log(`Você jogou ${jogadausuario} e a maquina  jogou ${result}. Você marcou um ponto`)
        }

        else {
            console.log(`Você jogou ${jogadausuario} e a maquina  jogou ${result}. Você perdeu`)
            pontuaçãomaquina ++
        }
 
    }
// resultados
if(pontuação > pontuaçãomaquina){
    alert(`Você ganhou!, sua a pontuação foi ${pontuação} contra ${pontuaçãomaquina}`)
}
else if (pontuação === pontuaçãomaquina){
    alert(`Empate!`)
}
else{
    alert(`Você perdeu!, sua a pontuação foi ${pontuação} contra ${pontuaçãomaquina}`)
}
}
game()
