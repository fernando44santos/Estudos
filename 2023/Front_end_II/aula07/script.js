// var e = window.document.querySelector('.title');
// e.addEventListener('mouseenter' , mouse)

// var a = window.document.getElementById('firstname')
// a.addEventListener('click', clicar)
// a.addEventListener('mouseenter', entrar)
// a.addEventListener('mouseout', sair)
// function clicar() {

//     a.removeAttribute("disabled")
   
// }
// function entrar() {
//     a.removeAttribute("disabled")
// }
// function sair() {
//     a.removeAttribute("disabled")

// }




// var a = window.document.getElementById('are')
// a.addEventListener('click', clicar)
// a.addEventListener('mouseenter', entrar)
// a.addEventListener('mouseout', sair)
// function clicar(){
   
//     a.innerText='Clicou!!!'
   
// }
// function entrar(){
// a.innerText= 'Entrou'

// }
// function sair(){
//     a.innerText= 'saiu'
   
// }

var s = window.document.getElementById('firstname')
s.addEventListener('click', clicar)
s.addEventListener('onmousemove', entrar)
s.addEventListener('mouseout', sair)
function clicar(){
   
    s.removeAttribute("disabled")
   
}
function entrar(){
    console.log(s.hasAttribute("disabled"))


}
function sair(){
    s.setAttribute("disabled", "true")
   
}