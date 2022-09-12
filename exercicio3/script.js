/* Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``` */

const melhoresComidas = ["1- pizza", "2- hamburguer", "3- chocolate", "4- doritos", "5- sushi"]

for (let i = 0; i<melhoresComidas.length; i++) {
    const num = melhoresComidas[i]
    console.log(`Melhores comidas - ${num}`)
}