const email = document.getElementById('inputEmail')
const password = document.getElementById('inputPassword')



function IsEmail(email){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
        return false;
    }
    else {
        return true;
    }
}
const validacao = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (emailValue === '' || emailValue === 'null' || emailValue.length < 6){

    }
    else if(IsEmail(email) != true){

    }
    else{

    }

    if (passwordValue === '' || passwordValue === 'null' || passwordValue.length < 8)

}