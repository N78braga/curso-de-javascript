const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

// o keyress captura o evento após a tecla se precionada 
inputTarefa.addEventListener('keypress', function(evento){
    if(evento.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(entradaTexto){
    const li = criaLi();
    li.innerText = entradaTexto;
    tarefas.appendChild(li);
    limpaEntrada();
    criaApagarBotao(li);
    salvarTarefas();
 }

function limpaEntrada(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaApagarBotao(li){
    li.innerText += ' ';
    const apagarBotao = document.createElement('button');
    apagarBotao.innerText = 'Apagar';
    // apagarBotao.classList.add('apagar); usar para apagar ou o exemplo abaixo
    apagarBotao.setAttribute('class', 'apagar');
    li.appendChild(apagarBotao);
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(evento){
    const eventos = evento.target;
   // console.log(eventos); para verificar na paginar onde esta ocorrendo o evento de click
    if(eventos.classList.contains('apagar')){
       eventos.parentElement.remove();
       salvarTarefas();
    }
});
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
       let tarefasTexto = tarefa.innerText;
       tarefasTexto = tarefasTexto.replace('Apagar', '').trim();
       listaDeTarefas.push(tarefasTexto);
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();


