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
   var removidos0 = document.querySelectorAll('.item')[0]
   var removidos1 = document.querySelectorAll('.item')[1]
   var removidos2 = document.querySelectorAll('.item')[2]
   var removidos3 = document.querySelectorAll('.item')[3]
   var removidos4 = document.querySelectorAll('.item')[4]
   var removidos5 = document.querySelectorAll('.item')[5]
  

// Removendo itens



   document.querySelector('.container').remove()
   
    document.querySelector('.item').innerHTML = 'removidos0'


    

// let removidos =+ document.querySelectorAll('.item')[0]



// document.querySelector('.item')[7].innerHTML = removidos

    

