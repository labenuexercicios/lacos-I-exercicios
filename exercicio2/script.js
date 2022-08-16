// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let numInput = +prompt('Digite um número para calcular a tabuada:');
let multi = 0

while (multi < 10) {
    multi++
    let tabuada = numInput*multi
    console.log(`${numInput}x${multi} = ${tabuada}`);
}