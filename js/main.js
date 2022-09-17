let inputnewtask = document.querySelector('#inputnewtask');
let btn_newtask = document.querySelector('#btn_newtask');
let tasklist = document.querySelector('#tasklist');
let inputcadastrar = document.getElementById('#btn_cadastrar');
let janelaEdicao = document.getElementById('#janelaEdicao');
let janelaEdicaobtnFechar = document.getElementById('#janelaEdicaobtnFechar');


inputnewtask.addEventListener('keypress',(e) => {

    if(e.keyCode == 13){
        let task ={
        nome: inputnewtask.value,
        id:gerarId(),
        }
        addtask(task);
    }
});

janelaEdicaobtnFechar.addEventListener('click',(e) => {
        alternarJanelaEdicao();

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
        let li = document.getElementById(''+idtask+'');
        if(li){
            
        }
    }


function delet(idtask){
    let confirm = window.confirm('Tem ceterza que deseja Excluir?');
    if(confirm) {
        let li = document.getElementById(''+idtask+'');
        if(li){
            tasklist.removeChild(li);
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

btn_cadastrar.addEventListener('click',(e) => {
  
    alert('Usuario ou senha Incorreto ');

    //Implementar essa função de esculta melhorar codigo
});

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}
