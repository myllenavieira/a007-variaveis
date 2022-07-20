let nome = undefined;
let idade = undefined;
console.log(typeof nome, typeof idade);

// As variáveis foram deixadas vazias propositalmente, logo imprimem undefined como seu tipo

nome = prompt("Qual o seu nome?");
idade = Number(prompt("Qual sua idade?"));
console.log(typeof nome, typeof idade);

// O tipo das variáveis mudaram, fazendo jus a seus objetivos agora

console.log("Olá",nome,"você tem",idade,"anos");