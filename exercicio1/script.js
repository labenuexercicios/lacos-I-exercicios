////////////////////// EXERCÍCIO 1 /////////////////////////////

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 
// “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta 
// não for **sim**, devemos imprimir o valor total da conta.

let comerMais = prompt('Você deseja comer mais coxinhas?').toUpperCase();
let conta = 0;

console.log('- EXERCÍCIO 1');
while (comerMais === "S") {
    conta += 2.50;
    comerMais = prompt('Você deseja comer mais coxinhas?').toUpperCase();
}

console.log(`O valor total é de: R$${conta}`);