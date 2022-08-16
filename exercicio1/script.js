// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let coxinha = prompt(`Você deseja comer uma/outra coxinha?\n\nS (Sim)\nN (Não)`).toUpperCase()
let soma = 0

while (coxinha === 'S') {
    soma += 2.50
    coxinha = prompt(`Você deseja comer uma/outra coxinha?\n\nS (Sim)\nN (Não)`).toUpperCase()
} 
let conta = soma.toFixed(2)
alert(`Sua conta deu R$${conta}`)

// TENTAR COLOCAR MAIS CASAS DECIMAIS