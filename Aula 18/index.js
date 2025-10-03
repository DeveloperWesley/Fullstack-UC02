//Capturando o dado via ID
let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);

//Capturando o dado via class
let item = document.getElementsByClassName("teste");

console.log(item[0].innerText);


//Capturando o dado via tag
let cabecalhoH1 = document.getElementsByTagName("h1");
console.log(cabecalhoH1[0].innerText);
console.log(cabecalhoH1[1].innerText);

//Capturando o dado via seletor
//Um unico elemento
let paragrafo = document.querySelector("p");
console.log(paragrafo.innerText);

//Todos os elementos
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos[0].innerText);
console.log(paragrafos[1].innerText);

cabecalhoH1[0].textContent = "Estou indo embora";

cabecalhoH1[0].innerHTML = "<u>Estou manipulando o dom!</u>";

cabecalhoH1[1].classList.remove("teste");




