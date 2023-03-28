// fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(function (result){
//     return result.json();
// })
// .then(function (cats){
//     let imagens = document.querySelector('#imgs')

//     cats.forEach(function (cat)  {
//         let div = document.createElement('div')
//         let img = document.createElement('img')

//         img.src = cat.url
//         div.appendChild(img)
//         imagens.appendChild(div)
        
//     });
// })

async function dadoscats(){
    const result = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    const dados = await result.json()
    console.log(dados)


        let imagens = document.querySelector('#imgs')
    
        dados.forEach(function (cat)  {
            let div = document.createElement('div')
            let img = document.createElement('img')
    
            img.src = cat.url
            div.appendChild(img)
            imagens.appendChild(div)
            
        });
}

dadoscats()