// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se 
// a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve 
// representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar 
// R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor 
// total da conta.

let pessoaComendo = prompt("Você quer comer mais uma coxinha? (S ou N)").toUpperCase()
let conta = 2.50

while (pessoaComendo === "S"){
    pessoaComendo = prompt("Você quer comer mais uma coxinha? (S ou N)").toUpperCase()
    conta = conta + 2.50 
}
console.log(`${conta}`)
