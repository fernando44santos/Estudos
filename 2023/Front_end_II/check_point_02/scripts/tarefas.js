let jwt;
onload = () =>{
    jwt = sessionStorage.getItem("jwt")


if(!jwt){
    alert("É necessario fazer login")
    window.location = 'inde'
}
else{
    buscandoUsuarioNaAPI()
    tasksAPI()
}}

function  buscandoUsuarioNaAPI(jwtsalvo){
    let SettRequest = {
        headers: {
          'authorization' : jwtsalvo
        },
      }
      fetch(`${apiBaseUrl()}/users/getMe`, SettRequest)
    .then( (resposta) => {

        if(resposta.status == 201 || resposta.status == 200){
            return resposta.json();
        } else {
           
            throw resposta;
        }   
        console.log(resposta);
    }).then((dados) => {
        renderizaNomeUsuario(dados);
    }).catch (error => {
        console.log('Servidor não está respondendo');
    })
}

function renderizaNomeUsuario(usuario) {
    userName = document.getElementById('userName');
    userName.innerText = `${usuario.firstName} ${usuario.lastName}`;
}


function tasksAPI(){
    let SettRequest = {
        headers: {
          'authorization' : jwt
        },
      }

      fetch(`${apiBaseUrl()}/tasks`, SettRequest)
      .then((resposta) =>{
        dados = resposta.json()

        tasks(dados)

      })

}

let tasksList = []

function tasks(listTask){

    tasksList = listTask

    let tarefasPendentesDom = document.querySelector(".tarefas-pendentes")

    for(let tarefa of listTask) {
        if(!tarefa.completed) {
            //Tarefas Pendentes
            let li = document.createElement('li');
            li.classList.add("tarefa");
            li.innerHTML = `
                <div class="not-done"></div>
                    <div class="descricao">
                    <p class="nome">${tarefa.description}</p>
                    <p class="timestamp">${tarefa.createdAt}</p>
                </div>
            `;
            tarefasPendentesDom.appendChild(li);
        }
        else{
            //Tarefas Completas
        }
    }
}


let buttonCreateTask = document.getElementById('create')

buttonCreateTask.addEventListener('click', event =>{

    event.preventDefault()

    let descritionTask = document.getElementById('novaTarefa')

    if(descritionTask.value !=""){
        console.log('Tarefa nao vazia')

        let bodyRequest = {
            "description": descricaoTarefa.value,
            "completed": false
        }

        let SettRequest = {
            method: 'POST',
            body: JSON.stringify(bodyRequest),
            headers: {
                'Content-type': 'application/json',
                'authorization' : jwt
            },
        }
        fetch(`${apiBaseUrl()}/tasks`, SettRequest)
        .then(chamada => {
            if(chamada.status == 201 || chamada.status == 200){
                return chamada.json();
            }
            throw response;
        }).then(dados => {
            console.log(dados);
            addNewTask(dados);
        });
        //Adicionar na DOM
        descricaoTarefa.value = "";

    }else {
        alert('Escreva a descrição da tarefa');
    }

})
function addNewTask(tarefa) {
    console.log(tarefa.description);
}
