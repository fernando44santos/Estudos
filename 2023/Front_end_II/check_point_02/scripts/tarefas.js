// https://todo-api.ctd.academy/#/

let notcompleted = document.querySelector(".tarefas-pendentes")
let tCompleted = document.querySelector(".tarefas-terminadas")

let jwt;
onload = () => {
    jwt = sessionStorage.getItem("jwt")


    if (!jwt) {
        alert("É necessario fazer login")
        window.location = 'index.html'
    }
    else {
        buscandoUsuarioNaAPI(jwt)
        tasksAPI()
    }
}

function buscandoUsuarioNaAPI(jwtsalvo) {
    let SettRequest = {
        headers: {
            'authorization': jwtsalvo
        },
    }
    fetch(`${apiBaseUrl()}/users/getMe`, SettRequest)
        .then((resposta) => {

            if (resposta.status == 201 || resposta.status == 200) {
                return resposta.json();
            } else {

                throw resposta;
            }

        }).then((dados) => {
            renderizaNomeUsuario(dados);
        }).catch(error => {
            console.log('Servidor não está respondendo');
        })
}

function renderizaNomeUsuario(usuario) {
    userName = document.getElementById('userName');
    userName.innerText = `${usuario.firstName} ${usuario.lastName}`;
}

// ERRO OBJETO NÃO INTERAVEL 'tasksList'
// function tasksAPI(){
//     let SettRequest = {
//         headers: {
//           'authorization' : jwt
//         },
//       }

//     //   fetch(`${apiBaseUrl()}/tasks`, SettRequest)
//     //   .then((resposta) =>{
//     //     dados = resposta.json()
//     //     tasks(dados)

//     //   console.log(dados)

//     //   })
// ERRO OBJETO NÃO INTERAVEL

async function tasksAPI() {
    let SettRequest = {
        headers: {
            'authorization': jwt
        },
    }
    let dado = await fetch(`${apiBaseUrl()}/tasks`, SettRequest)
    let dados = await dado.json();
    tasks(dados)
}

let tasksListAll = []




function tasks(tasksList) {

    tasksListAll = tasksList




    for (let tarefa of tasksList) {
        console.log(tasksListAll)
        if (!tarefa.completed) {
            //Tarefas Pendentes
            let NTaks = `
                <div class="not-done" onclick="tasksAPIfinished(${tarefa.id})"></div>
                    <div class="descricao">
                    <p class="nome">${tarefa.description}</p>
                    <p class="timestamp">${tarefa.createdAt}</p>
                </div>
            `;
            let newtask = document.createElement('li');
            newtask.id = `id-${tarefa.id}`
            newtask.innerHTML = NTaks
            newtask.classList.add("tarefa");
            notcompleted.appendChild(newtask);
            console.log("funcionando inco")
        }
        else {
            //Tarefas Completas
            NTaksf.classList.add("tarefa");
            NTaksf.id = `id-${tarefa.id}`
            let NTaksf = `
                    <div class="descricao">
                    <p class="nome">${tarefa.description}</p>
                    <div class="opcoes-tarefas-completas">
                        <button><i id="tarefa_${tarefa.id}" class="fas fa-undo-alt change" title="Voltar para tarefa pendente"></i></button>
                        <button><i id="tarefa_${tarefa.id}" class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            `;
            let newtaskf = document.createElement('li')
            newtaskf.innerHTML = NTaksf
            newtaskf.classList.add("tarefa")

            tarefasTerminadas.appendChild(newtaskf)
            console.log("funcionando inco")
        }
    }
}


// Completando tarefa

async function tasksAPIfinished(taskId) {

console.log(taskId)

    let completed = {
        completed: true
    }
    const completedJson= JSON.stringify(completed)
    let SettRequest = {
        method: 'PUT',
        body: completedJson,
        headers: {
            'Content-type': 'application/json',
            'authorization': jwt
        },
    }
    try {
        let dado = await fetch(`${apiBaseUrl()}/tasks/${taskId}`, SettRequest)
        let dados = await dado.json();
        tasks(dados)
        finished(dados)
    }

    catch (error) {
        console.log(error.status)
        console.log('erro!')
    }

}

function finished(tarefa) {
    let taskf = document.getElementById(`id-${tarefa.id}`);
    taskf.remove();

    let newcompleted = `
            <div class="descricao">
                <p class="nome">${tarefa.description}</p>
                <div class="opcoes-tarefas-completas">
                    <button><i id="tarefa_${tarefa.id}" class="fas fa-undo-alt change" title="Voltar para tarefa pendente"></i></button>
                    <button><i id="tarefa_${tarefa.id}" class="far fa-trash-alt"></i></button>
                </div>
            </div>
        `;
    let completedTask = document.createElement('li');
    completedTask.innerHTML=newcompleted
    completedTask.classList.add('tarefa');
    tCompleted.appendChild(completedTask)
}

let buttonCreateTask = document.getElementById('create')

buttonCreateTask.addEventListener('click', event => {

    event.preventDefault()

    let descritionTask = document.getElementById('novaTarefa')

    if (descritionTask.value != "") {
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
                'authorization': jwt
            },
        }
        fetch(`${apiBaseUrl()}/tasks`, SettRequest)
            .then(chamada => {
                if (chamada.status == 201 || chamada.status == 200) {
                    return chamada.json();
                }
                throw response;
            }).then(dados => {
                console.log(dados);
                addNewTask(dados);
            });
        //Adicionar na DOM
        descricaoTarefa.value = "";

    } else {
        alert('Escreva a descrição da tarefa');
    }

})
function addNewTask(tarefa) {
    console.log(tarefa.description);
}






