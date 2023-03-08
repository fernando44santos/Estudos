
buttoncheck = document.getElementById('check')
function darkside() {
    if (buttoncheck.checked) {
        // Modificando cor do backgraud 
        document.querySelector('.dark').style.backgroundColor = 'rgb(39, 39, 39)'
        // Adicionando uma class na tag h1
        let title = document.querySelector('h1')
        title.classList.add('title')
        // Modificações no titulo 'A família dos felinos'
        document.querySelector('.title').style.backgroundColor = 'rgb(19, 19, 19)'
        document.querySelector('.title').style.color = 'rgb(170, 170, 170)'
        document.querySelector('.title').style.borderColor = 'black'
        // Modificações nos items
        // // Modificações nos textos dos itens e cabeçalhos dos itens
        for (let index = 0; index < 6; index++) {


            document.querySelectorAll('.item')[index].style.backgroundColor = 'rgb(19, 19, 19)'
            document.querySelectorAll('.item')[index].style.borderColor = 'black'
            document.querySelectorAll('.item')[index].style.color = 'rgb(230, 230, 230)'
        }
        // Modificando nome no botão
        document.getElementById("darklight").innerText = 'Light'
    }

    else{
             // Modificando cor do backgraud 
             document.querySelector('.dark').style.backgroundColor = 'rgb(219, 219, 219)'
             // Adicionando uma class na tag h1
             let title = document.querySelector('h1')
             title.classList.add('title')
             // Modificações no titulo 'A família dos felinos'
             document.querySelector('.title').style.backgroundColor = 'white'
             document.querySelector('.title').style.color = 'grey'
             document.querySelector('.title').style.borderColor = 'lightgrey'
             // Modificações nos items
             // // Modificações nos textos dos itens e cabeçalhos dos itens
             for (let index = 0; index < 6; index++) {
     
     
                 document.querySelectorAll('.item')[index].style.backgroundColor = 'White'
                 document.querySelectorAll('.item')[index].style.borderColor = 'lightgrey'
                 document.querySelectorAll('.item')[index].style.color = 'gray'
             }
          // Modificando nome no botão
          document.getElementById("darklight").innerText = 'Dark'
    }

}



