const form = document.getElementById('forms')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')
const erromsg = document.querySelectorAll


form.addEventListener('submit', e => {
    e.preventDefault()
    validacao()
    login();
})


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
// function IsEmail(email){
//     var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
//     var check=/@[w-]+./;
//     var checkend=/.[a-zA-Z]{2,3}$/;
//     if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
//         return false;
//     }
//     else {
//         return true;
//     }
// }
const validacao = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (emailValue === '' || emailValue === 'null'){
        showValidation(email, 'O campo não pode esta vazio')
        console.log('erro')
    }
    else if(!isValidEmail(emailValue)){
        showValidation(email, 'Insira um email valido')
        console.log('erro isemail')
    }
   
    if (passwordValue === '' || passwordValue === 'null'){
        showValidation(password, 'O campo não pode está vazio')
        console.log('senha erro')
    }
    else if(passwordValue.length < 8){
        showValidation(password, 'A senha deve conter 8 ou mais caracteres')
        console.log('tamanho')
    }
    else{
        console.log('tudo certo')
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


// Fazendo login API

async function login (){
    let infoLogin = {
        email : email.value,
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
    try{
        const info = await fetch(`https://todo-api.ctd.academy/v1/users/login`, SettRequest);
        let KeyJwt = await info.json();
        console.log(KeyJwt.jwt);
    }
    catch(erro) {
        console.log(erro);
    }
}


