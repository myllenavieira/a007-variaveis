let a = 10;
let b = 25;

let c = a;
a = b;
b = c;

console.log("O novo valor de a é", a); 
console.log("O novo valor de b é", b);
// Com a variável c é possível trocar os valores sem perder nenhum dado