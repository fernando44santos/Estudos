

function darkside (){
// Modificando cor do backgraud 
document.querySelector('.dark').style.backgroundColor = 'rgb(39, 39, 39)'
// Adicionando uma class na tag h1
let title = document.querySelector('h1')
title.classList.add('title')
// Modificações no titulo 'A família dos felinos'
document.querySelector('.title').style.backgroundColor= 'rgb(19, 19, 19)'
document.querySelector('.title').style.color = 'rgb(170, 170, 170)'
document.querySelector('.title').style.borderColor = 'black'
// Modificações nos items
// // Modificações nos textos dos itens e cabeçalhos dos itens
for (let index = 0; index < 6; index++) {


    document.querySelectorAll('.item')[index].style.backgroundColor = 'rgb(19, 19, 19)'
    document.querySelectorAll('.item')[index].style.borderColor = 'black'
    document.querySelectorAll('.item')[index].style.color = 'rgb(230, 230, 230)'
    }
  
}

// Removendo itens

// let removidos = document.querySelectorAll('.item')[0].remove()


// document.querySelector('.item').innerHTML = removidos

    

