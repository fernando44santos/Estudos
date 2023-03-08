const submit = document.querySelector('.submit')





const ratingGroup = document.querySelectorAll('.rating-single')


function mouse(item){
    item.style.background = 'white'
}

function mouseout(item){
    item.style.background = 'hsl(213, 19%, 18%)'
}
for (let index = 0; index < ratingGroup.length; index++) {
    ratingGroup[index].addEventListener('mouseenter', (event) => {
        mouse(event.target)
    })
    ratingGroup[index].addEventListener('mouseout', (event) => {
        mouseout(event.target)
    })
}

function clicar(){
    alert('Enviado !')
}

submit.addEventListener('click', clicar)

const body = document.querySelector('body')
function onlod (){
    alert('Pagina carregada')
}
body.addEventListener('load', onlod())



