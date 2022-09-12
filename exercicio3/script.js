/*# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e 
imprima as strings em formato de ranking, como no exemplo abaixo:

```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
```*/

let nome = ['null','coso','cisi','cucu','caeq','casa ']

for (x = 1; x <= (nome.length - 1 ); x++ ) {
    console.log(`${x} - ${nome[x]}`)
}
    