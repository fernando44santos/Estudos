const form = document.getElementById('forms')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const acessar = document.getElementById('login')
const validantion = document.getElementById('statusValidation')





form.addEventListener('submit', e => {
    e.preventDefault()
    login();
})

acessar.setAttribute('disabled', true)
acessar.innerText = "Bloqueado"

let emailValidacao = false
let senhaValidacao = false
let loginApiValidacao = true

email.addEventListener('keyup', function () {

    const emailValue01 = email.value.trim()
    const emailValue = emailValue01.toLowerCase()


    if (emailValue === '' || emailValue === 'null') {
        showValidationError(email, 'O campo não pode esta vazio')
        emailValidacao = false
        console.log('erro')
    }
    else if (!isValidEmail(emailValue)) {
        showValidationError(email, 'Insira um email valido')
        emailValidacao = false
        console.log('erro isemail?')
    }
    else {
        showValidationSuccess(email)
        emailValidacao = true
    }
    validacaoLogin()

})

password.addEventListener('keyup', function () {

    const passwordValue = password.value.trim()

    if (passwordValue === '' || passwordValue === 'null') {
        showValidationError(password, 'O campo não pode está vazio')
        senhaValidacao = false
        console.log('senha erro')

    }
    else if (passwordValue.length < 8) {
        showValidationError(password, 'A senha deve conter 8 ou mais caracteres')
        senhaValidacao = false
        console.log('tamanho')
    }
    else {
        showValidationSuccess(password)
        senhaValidacao = true
        console.log('tudo certo')
    }
    resetaValidacaoErro()
    validacaoLogin()
})







// Fazendo login API

function login() {

    let infoLogin = {
        email: email.value,
        password: password.value
    }

 
    // Convetendo objeto infoLogin em Json
    const infoLoginJson = JSON.stringify(infoLogin)

    // Confingurando a requisição na API
    let SettRequest = {
        method: 'POST',
        body: infoLoginJson,
        headers: {
            'Content-type': 'application/json',
        },
    }

    if (validacaoLogin()) {
        fetch(`https://todo-api.ctd.academy/v1/users/login`, SettRequest)
            .then((response) => {
                /* Verifica status de sucesso na execução da promisse */
                console.log(response);
                console.log("eae eae eae")
                if (response.status == 201 || response.status == 200) {
                    return response.json()
                }
                // Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() 
                throw response;
            }).then(function (resposta) {
                console.log(resposta);
                // Chama função ao obter sucesso no login
                loginsucess(resposta.jwt)
            })
            .catch(error => {
                // Chama função ao obter algum erro no login
                loginErro(error.status)
                console.log("eae eae eae erro")
            });


        function loginErro(statusRecebido) {
            let validantion = document.getElementById('statusValidation')
            console.log("Ocorreu algum erro, verifique o e-mail e/ou senha")
            password.value = ""
            if (statusRecebido == 400 || statusRecebido == 404) {
                validantion.innerText = "Verifique o e-mail e/ou senha"
                loginApiValidacao = false

            } else {
                loginApiValidacao = true
            }

        }




        function loginsucess(jwtRecebido) {
            sessionStorage.setItem("jwt", jwtRecebido);
            window.location.href = "tarefas.html"
            console.log(jwtRecebido);
            console.log("passou aqui")
        }
    }
    else {
        alert("Ambos campos devem ser preenchidos")
        console.log(infoLogin)
    }
}

function resetaValidacaoErro() {
    validantion.innerText = ''
    acessar.removeAttribute("disabled")
    acessar.innerText = "Acessar"
    loginApiValidacao = true
}

function validacaoLogin() {

    if (!emailValidacao || !senhaValidacao || !loginApiValidacao) {
          acessar.setAttribute("disabled", true)
        return false;

    } else {
        acessar.removeAttribute("disabled")
        acessar.innerText = "Acessar"
        console.log("desabled true")
        return true;
    }
}