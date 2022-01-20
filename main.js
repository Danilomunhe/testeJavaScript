const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const vermelho = document.getElementById('vermelho');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');

function trocarTitulo(){
    titulo.textContent = nome.value
    titulo.classList.add('vermelho')
    titulo.classList.remove('verde', 'azul')
}
function trocarTitulo2(){
    titulo.textContent = nome.value
    titulo.classList.add('azul')
    titulo.classList.remove('verde', 'vermelho')
}
function trocarTitulo3(){
    titulo.textContent = nome.value
    titulo.classList.add('verde')
    titulo.classList.remove('azul', 'vermelho')
}

vermelho.addEventListener('click', trocarTitulo)
azul.addEventListener('click', trocarTitulo2)
verde.addEventListener('click', trocarTitulo3)

//Trocando o texto do h1 pelo meu nome
// document.querySelector('h1').textContent = 'Danilo'