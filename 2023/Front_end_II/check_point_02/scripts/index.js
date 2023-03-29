const form = document.getElementById('forms')
const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')


form.addEventListener('submit', e => {
    e.preventDefault()
    validacao()
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
        console.log('erro')
    }
    else if(!isValidEmail(emailValue)){
        console.log('erro isemail')
    }
   
    if (passwordValue === '' || passwordValue === 'null'){
        console.log('senha erro')
    }
    else if(passwordValue.length < 8){
        console.log('tamanho')
    }
    else{
        console.log('tudo certo')
    }

}