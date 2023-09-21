//Selecionando botão pelo ID
const botao = document.querySelector('button');
const conatadorElemento = document.querySelector('#contador');

//inicializando um contador
let contador = 0;

//função que será chamada pelo eventoListener
function contando()
{
    contador++;
    conatadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando);