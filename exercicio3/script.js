/**Exercício 3

Crie um array com 5 strings. Faça um programa que 
percorra este array e imprima as strings em formato
de ranking, como no exemplo abaixo:

//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA",
 "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil" */

const meuArray = ["Rússia", "Canadá", "China", "EUA",
"Brasil"];

for (let i = 1; i <= meuArray.length ; i++){
     console.log(`${i} - ${meuArray[i-1]}`)
}