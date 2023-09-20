/*Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

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

let numeroUsuario = Number(prompt('Insira um número:'))

for(i = 1; i <= 10; i++){
    let multiplicação = numeroUsuario * i
    console.log(`O número inserido é: ${numeroUsuario} e a multiplicação dele por: ${i} é igual a: ${multiplicação}`)
}