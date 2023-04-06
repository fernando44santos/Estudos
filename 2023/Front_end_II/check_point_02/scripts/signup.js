const form = document.getElementById('forms')
const firstname = document.getElementById('inputName')
const lastName = document.getElementById('inputLastName')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const password02 = document.getElementById('inputPassword02')

form.addEventListener('submit', e => {
    e.preventDefault()
    validacao()
    // CreatLogin()
})



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// const isValidPassword = password => {
//     const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     // const res = /((?=.\\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%]).{8,20})$/g;
//     return res.test(String(password).toLowerCase());
// };

const validacao = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const nameValue = firstname.value.trim()
    const lastNvalue = lastName.value.trim()
    const password02Value = password02.value.trim()

    if (nameValue === '' || nameValue === 'null') {
        showValidation(firstname, 'O campo não pode ficar vazio')
        console.log('nome em branco')
    }

    if (lastNvalue === '' || lastNvalue === 'null') {
        showValidation(lastName, 'O campo não pode ficar vazio')
        console.log('sobrenome em branco')
    }


    if (emailValue === '' || emailValue === 'null') {
        showValidation(email, 'O campo não pode ficar vazio')
        console.log('email em branco')
    }
    else if (!isValidEmail(emailValue)) {
        showValidation(email, 'Insira um endereço de email valido')
        console.log('erro email invalido')
    }

    if (passwordValue === '' || passwordValue === 'null') {
        showValidation(password, 'O campo não pode ficar vazio')
        console.log('senha vazio')
    }
    else if (!isValidPassword(passwordValue)) {
        showValidation(password, 'A senha deve conter 8 ou mais caracteres')
        console.log('senha invalida')
    }
    else if (password02Value === '' || password02Value === 'null') {
        showValidation(password02, 'O campo não pode ficar vazio')
        console.log('senha02 vazio')
    }

    else if (password02Value === passwordValue) {
        showValidation(password02, 'As senhas não coincidem')
        console.log('As senhas não coincidem')
    }


}

// Mostrando erros na tela
const showValidation = (element, msgs) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.msg-erro');

    errorDisplay.innerText = msgs;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


// Criando usuario



async function CreatLogin() {

    let CreateLogin = {
        firstName: "Lunahh",
        lastName: "Luna",
        email: "luna7s887@gmail.com",
        password: "Ffernando#8"
    }
    
    // Convetendo objeto CreateLogin em Json
    const infoLoginJson = JSON.stringify(CreateLogin)
    
    // Confingurando a requisição na API
    let SettRequest = {
        method: 'POST',
        body: infoLoginJson,
        headers: {
            'Content-type': 'application/json',
        },
    }

    try {
        const info = await fetch(`https://todo-api.ctd.academy/v1/users`, SettRequest);
        let KeyJwt = await info.json();
        console.log(KeyJwt.jwt);
    }
    catch (erro) {
        console.log(erro);
    }
}
