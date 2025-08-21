

const criarTarefa = (evento) =>{
    evento.preventDefault();
    
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    
    input.value = "";
    
    
    // console.log(valor);
}


// Evento
const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
};

const concluirTarefa = (evento) => {
    const eventoAcionado = evento.target;

    const tarefaCompleta = eventoAcionado.parentElement;

    tarefaCompleta.classList.toggle('done');


};

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const deletaEvento = evento.target;

    const tarefaDeletada = deletaEvento.parentElement;
    tarefaDeletada.remove();

}

// `createElement()` -> Cria um novo elemento.
// `appendeChild()` -> Insere um elemento filho no elemento pai.


// function somarDoisValores(num1, num2) {
//     let soma = num1 + num2;
//     console.log(some);
// }

// const diminuirDoisValores = (num1 , num2) => num1 - num2;