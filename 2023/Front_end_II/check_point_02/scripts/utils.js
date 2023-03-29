const form = document.getElementById('forms')
const firstname = document.getElementById('inputName')
const lastName = document.getElementById('inputLastName')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const password02 = document.getElementById('inputPassword02')

form.addEventListener('submit', e => {
    e.preventDefault()
    validacao()
})



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPassword = password => {
    const res = /((?=.\\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%]).{8,20})$/g;
    return res.test(String(password).toLowerCase());
};

const validacao = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const nameValue = firstname.value.trim()
    const lastNvalue = lastName.value.trim()
    const password02Value = password02.value.trim()

    if(nameValue === '' || nameValue === 'null'){
        console.log('nome em branco')
    }

    if(lastNvalue=== '' || lastNvalue === 'null'){
        console.log('sobrenome em branco')
    }
    

    if (emailValue === '' || emailValue === 'null'){
        console.log('email em branco')
    }
    else if(!isValidEmail(emailValue)){
        console.log('erro email invalido')
    }
   
    if (passwordValue === '' || passwordValue === 'null'){
        console.log('senha vazio')
    }
    else if(!isValidPassword(passwordValue)){
        console.log('senha invalida')
    }
    else if(password02Value === '' || password02Value === 'null'){
        console.log('senha02 vazio')
    }

    else if(password02Value === passwordValue){
        console.log('As senhas não coincidem')
    }


}
