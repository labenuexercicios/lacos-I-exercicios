/* Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta. */

let conta = 0
let coxinha = 0
let pergunta = prompt('Deseja comer mais coxinhas? \nS \nN').toLowerCase()

while(pergunta == "s"){
    coxinha++
    conta+=2.5   
    pergunta = prompt('Deseja comer mais coxinhas? \nS \nN').toLowerCase()
}
console.log(`Foram ${coxinha} coxinhas no valor de R$${conta.toFixed(2)}.`) 