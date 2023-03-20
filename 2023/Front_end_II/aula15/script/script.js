const botao = document.querySelector("form")
botao.addEventListener('submit', (event) => {
event.preventDefault()
    const ms = document.querySelector("#txt").value
    const value = {}
    const write = document.querySelector('.msg')
    value['comentario'] = ms
 const json = JSON.stringify(value)
 localStorage.setItem('txt', json)
 const save = JSON.parse(json)
    console.log(json)
 for (let i= 0; i < save.length; i++) {
    
    write.innerHTML = `<p>${save[i]} </p>`
 } 



})





// const submit = document.querySelector('.btnEnviar')



// function dados() {

//     const Value = document.getElementById('txt').value;
//     const Msg = document.querySelector('.p');
//     Msg.innerText = Value;
//     console.log(Value);

// }
// submit.addEventListener('click', dados)




// const btn = document.querySelector('.btnS')


// const p = document.getElementsByClassName('write')


// btn.addEventListener ('submit', () =>{
//     const namevalue = document.querySelector('p#name').value
//     p.innerHTML = namevalue
//     console.log(namevalue)
// })



// btn.addEventListener('submit', enviar)

// function enviar(){
//     // p.innerHTML = `${namevalue}`
//     console.log('ceerto')
// }
// addEventListener
// const submit = document.querySelector('.btnS')
// submit.addEventListener('click', enviar)