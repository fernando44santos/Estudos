const botao = document.querySelector("form")
const botaorest = document.querySelector("#btreset")



// Função botão enviar
botao.addEventListener('submit', (event) => {
   event.preventDefault()


   // localStorage
   var ms = document.querySelector("#txt").value
   localStorage.setItem('comentario', ms)
   let local = localStorage.getItem('comentario')
   // sessionStorage
   let ms2 = document.querySelector("#txt2").value
   sessionStorage.setItem('comentario2', ms2)
   let localSes = sessionStorage.getItem('comentario2')






   console.log(local)
// Escrevendo na tela o que foi obtido do input
   const write = document.querySelector('.msg')
   let coment = `<p>Local sto:${local}</p>`
   write.innerHTML = coment


   const write2 = document.querySelector('.msg2')
   let coment2 = `<p>Sesion sto:${localSes}</p>`
   write2.innerHTML = coment2

})

// Função botão reset
botaorest.addEventListener('click', (e) => {
   e.preventDefault()
   localStorage.removeItem('comentario')
   const write = document.querySelector('.msg')
   let coment = ' '
   write.innerHTML = coment
})

// if que retorna Local storage para a tela
let local = localStorage.getItem('comentario')
if (local != null) {
   const write = document.querySelector('.msg')
   let coment = `<p>Local sto:${local}</p>`
   write.innerHTML = coment
}