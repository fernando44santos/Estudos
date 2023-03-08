// 1- Adicionar ao cartão, o atributo "classe" com o valor "card"
let novaclass = document.querySelector('#tarjeta')
novaclass.classList.add('card')

// 2- Adicionar à imagem, o atributo "src" com o valor "https://www.youtube.com/img/desktop/yt_1200.png"
logo.setAttribute('src', "https://www.youtube.com/img/desktop/yt_1200.png")

// 3- Remova a classe que está lhe dando um formato feio
let removerclass = document.querySelector('.titulo-feo')
removerclass.classList.remove('titulo-feo')

// 4- Verifique se o link para o YouTube tem ou não o atributo href
let link = document.querySelector('#link_youtube')
link.hasAttribute('href')
console.log(link.hasAttribute('href'))
// 5- Obtenha o link href para a Wikipedia e mostre-o pelo console
let linkw = document.querySelector('#link_wikipedia')
linkw.getAttribute('href')
console.log(linkw.getAttribute('href'))