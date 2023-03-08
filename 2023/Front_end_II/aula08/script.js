
const body = document.querySelector('body')

function onlod() {
    const submit = document.querySelector('.submit')
    const ratingGroup = document.querySelectorAll('.rating-single')
    const ratingGroup02 = document.querySelectorAll('.rating-single')


    function mouse(item) {
        item.style.background = 'white'
    }

    function mouseout(item) {
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

    function clicar() {
        alert('Enviado !')
    }

    submit.addEventListener('click', clicar)



    document.addEventListener('keypress', function onekey(tecla) {
        if (tecla.key === '1') {
            document.querySelectorAll('.rating-single')[0].style.background = 'red';
        }

        else if (tecla.key === '2') {
            document.querySelectorAll('.rating-single')[1].style.background = 'red';
        }

        else if (tecla.key === '3') {
            document.querySelectorAll('.rating-single')[2].style.background = 'red';
        }
        else if (tecla.key === '4') {
            document.querySelectorAll('.rating-single')[3].style.background = 'red';
        }
        else if (tecla.key === '5') {
            document.querySelectorAll('.rating-single')[4].style.background = 'red';
        }
    

    })

    document.addEventListener('keyup', function onekeydown(tecla) {
        if (tecla.key === '1') {
            document.querySelectorAll('.rating-single')[0].style.background = 'white';
        }

        else if (tecla.key === '2') {
            document.querySelectorAll('.rating-single')[1].style.background = 'blue';
        }

        else if (tecla.key === '3') {
            document.querySelectorAll('.rating-single')[2].style.background = 'purple';
        }
        else if (tecla.key === '4') {
            document.querySelectorAll('.rating-single')[3].style.background = 'yellow';
        }
        else if (tecla.key === '5') {
            document.querySelectorAll('.rating-single')[4].style.background = '#ff44';
        }
    

    })


}
body.addEventListener('load', onlod())



