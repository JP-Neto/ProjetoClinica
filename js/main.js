let inputnewtask = document.querySelector('#inputnewtask');
let btn_newtask = document.querySelector('#btn_newtask');
let tasklist = document.querySelector('#tasklist');
let inputcadastrar = document.querySelector('#btn_cadastrar');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo')
let janelaEdicaobtnfechar = document.querySelector('#janelaEdicaobtnfechar');
let btn_cancelar = document.querySelector('#btn_cancelar');
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa');
let idtarefaEdicao = document.querySelector('#idtarefaEdicao');
let inputTakNomeEdicao= document.querySelector('#inputTakNomeEdicao');

inputnewtask.addEventListener('keypress',(e) => {

    if(e.keyCode == 13){
        let task ={
        nome: inputnewtask.value,
        id:gerarId(),
        }
        addtask(task);
    }
});


janelaEdicaobtnfechar.addEventListener('click',(e) => {
    AlternarJanelaEdicao();

});

btn_newtask.addEventListener('click',(e) => {

    let task = {
        nome: inputnewtask.value,
        id: gerarId(),
     }
     addtask(task);

});

function gerarId(){
    return Math.floor(Math.random()*3000);
    // gera um numero Randomico math.floor arendoda o numero
}


btnAtualizarTarefa.addEventListener('click', (e)=>{
    e.preventDefault();

            let idtask = idtask.innerHTML.replace('#','');

            let task ={
                nome: inputTakNomeEdicao.value,
                id:idtask,
            }

            let task_atual = document.getElementById(''+idtask+'');

        if(task_atual){
            let li = createTagLI(task);
            tasklist.replaceChild(li, task_atual);
         AlternarJanelaEdicao();
        }else{
            alert('Elemento Html Não Encontrado!');
        }

});


function addtask(task){
    let li= createTagLI(task);
    tasklist.appendChild(li);
    inputnewtask.value='';
}
function createTagLI(task){
    let li = document.createElement('li');
    li.id = task.id;

    let span = document.createElement('span');
    span.classList.add('tasktext');
    span.innerHTML = task.nome;

    let div = document.createElement('div');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('btn_action');
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEdit.setAttribute('onclick','edit('+task.id+')');

    let btn_del = document.createElement('button');
    btn_del.classList.add('btn_action');
    btn_del.innerHTML = '<i class="fa fa-trash"></i>';
    btn_del.setAttribute('onclick','delet('+task.id+')');

    div.appendChild(btnEdit);
    div.appendChild(btn_del);

    li.appendChild(span);
    li.appendChild(div);
    return li;
    
}

function edit(idtask){
        let li = document.getElementById(''+ idtask +'');
        if(li) {
            idtarefaEdicao.innerHTML = '#'+ idtask;
            inputTakNomeEdicao.value= li.innerText;
            AlternarJanelaEdicao();
        }else{
            alert('Elemento HTML não econtrado');
        }
    }
    
function delet(idtask){
    let confirm = window.confirm('Tem ceterza que deseja Excluir?');
    if(confirm) {
        let li = document.getElementById(''+idtask+'');
        if(li){
            tasklist.removeChild(li);
        }else{
            alert('Elemento Html Não Encontrado!');
        }
    }
}

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

        if (login=="admin" && senha=="admin"){  

            location.href="home.html";

        }else{
        alert('Usuario ou senha Incorreto ');
        }
 }

function cadastro(){

    location.href="cadastro.html";
}

function AlternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}
