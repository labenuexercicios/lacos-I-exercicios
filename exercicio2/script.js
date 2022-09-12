/*# Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, 
o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```*/

let num = prompt("digite um número")
console.log(`a raiz quadradra de ${num}`)
for (x = 1; x<= 10; x++) {
    console.log(`${num * x}`)
}