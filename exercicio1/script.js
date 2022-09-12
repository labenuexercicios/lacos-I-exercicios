/*# Exercício 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando 
se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve
 representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar 
R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor 
total da conta.*/


var resposta
var conta = 0
while (resposta !== "N" ) {
    var resposta = prompt("você deseja comer? S/N?").toUpperCase()
    if (resposta == "S"){
        conta = (conta + 2.50)
    } 
    }
console.log(`aqui está o valor do almoço ${conta} reais`)
