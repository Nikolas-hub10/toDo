
const lista = document.querySelector("[data-list]");

const novaTarefa = document.querySelector("[data-form-button]")

const criarTarefa = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);
}


// Evento
novaTarefa.addEventListener('click', criarTarefa);
//Espera um evento e oq vai acontecer

// function somarDoisValores(num1, num2) {
//     let soma = num1 + num2;
//     console.log(some);
// }

// const diminuirDoisValores = (num1 , num2) => num1 - num2;