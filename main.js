import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

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
    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa);
    
    input.value = "";
    
    
    // console.log(valor);
}
// Evento
const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener('click', criarTarefa);





// `createElement()` -> Cria um novo elemento.
// `appendeChild()` -> Insere um elemento filho no elemento pai.


// function somarDoisValores(num1, num2) {
//     let soma = num1 + num2;
//     console.log(some);
// }

// const diminuirDoisValores = (num1 , num2) => num1 - num2;