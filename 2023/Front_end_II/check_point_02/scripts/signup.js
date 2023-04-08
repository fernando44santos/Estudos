const form = document.getElementById('forms')
const firstname = document.getElementById('inputName')
const lastName = document.getElementById('inputLastName')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const password02 = document.getElementById('inputPassword02')

form.addEventListener('submit', e => {
    e.preventDefault()
    CreatLogin()
  
})



// Validações

firstname.addEventListener('keyup', function () {
    const nameValue = firstname.value.trim()

    if (nameValue === '' || nameValue === 'null') {
        showValidationError(firstname, 'O campo não pode ficar vazio')
        console.log('nome em branco')
    }
    else {
        showValidationSuccess(firstname)
    }
})

lastName.addEventListener('keyup', function () {
    const lastNvalue = lastName.value.trim()

    if (lastNvalue === '' || lastNvalue === 'null') {
        showValidationError(lastName, 'O campo não pode ficar vazio')
        console.log('sobrenome em branco')
    }
    else{
        showValidationSuccess(lastName)
    }


})


email.addEventListener('keyup', function () {
    const emailValue = email.value.trim()

    if (emailValue === '' || emailValue === 'null') {
        showValidationError(email, 'O campo não pode ficar vazio')
        console.log('email em branco')
    }
    else if (!isValidEmail(emailValue)) {
        showValidationError(email, 'Insira um endereço de email valido')
        console.log('erro email invalido')
    }
    else {
        showValidationSuccess(email)

    }

})

password.addEventListener('keyup', function () {
    const passwordValue = password.value.trim()

    if (passwordValue === '' || passwordValue === 'null') {
        showValidationError(password, 'O campo não pode ficar vazio')
        console.log('senha vazio')
    }
    else if (!isValidPassword(passwordValue)) {
        showValidationError(password, 'Senha fraca')
        console.log('senha invalida')
    }
    else{
        showValidationSuccess(password)

    }

})

password02.addEventListener('keyup', function(){
    const password02Value = password02.value.trim()

    if (password02Value === '' || password02Value === 'null') {
        showValidationError(password02, 'O campo não pode ficar vazio')
        console.log('senha02 vazio')
    }
    
    else if (password02Value !== passwordValue) {
        showValidationError(password02, 'As senhas não coincidem')
        console.log('As senhas não coincidem')
    }
    else{
        showValidationSuccess(password02)
    }

})
//----------------------------------------------------------------------------------


// Criando usuario

async function CreatLogin() {



    let nameValueCorrection = correcao(firstname.value)
    let lastNameValueCorrection = correcao(lastName.value)
    let emailValueCorrection = correcao(email.value)
    emailValueCorrection = correcaoTLwC(emailValueCorrection)
    let passwordCorrection = correcao(password.value)


    let CreateLogin = {
        firstName: nameValueCorrection,
        lastName: lastNameValueCorrection,
        email: emailValueCorrection,
        password: passwordCorrection
    }
    console.log(CreateLogin)
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

