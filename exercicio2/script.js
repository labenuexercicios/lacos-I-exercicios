// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o 
// código deve imprimir a **tabuada** do número, de 1 a 10.

let numero = Number(prompt("Digite um número de 1 a 10 para saber sua tabuada"))
let i = 1


for (let i = 1 ; i<=10 ; i++ ){
    let tabuada = numero*i
    console.log(`${numero}x${i}=${tabuada}`)
}

