// Para carregar alguns elementos através do id
$(function() {
    $('#header').load('header.html');
    $('#header-diferente').load('header-diferente.html');
    $('#footer').load('footer.html');
    $('#produtos-vistos').load('produtos-vistos.html');
});

// Para obter a data atual
$(function(){
    data = new Date();
    ano = data.getFullYear();
    document.getElementById("data_atual").innerHTML = ano;
});

// Para adicionar o contador nas compras
const counter = document.querySelector('#counterValue');
const buttonDecrement = document.querySelector('#buttonDecrement');
const buttonIncrement = document.querySelector('#buttonIncrement');

let value = counter.value;

buttonIncrement.addEventListener('click',()=> {
    value = ++value;
    counter.value = value;
});
buttonDecrement.addEventListener('click',() => {
    value = value !== 0 ? --value : 0;
    counter.value = value;
});