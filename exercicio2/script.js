// Exercício 2
//Crie um programa que peça um número para o usuário. Com este número, 
//o código deve imprimir a **tabuada** do número, de 1 a 10.
const numero = Number(prompt("Digite um número"))
let tabuada = 0

for (let i = 1; i <= 10; i++){
    tabuada = numero * i
    console.log(tabuada)
}
    