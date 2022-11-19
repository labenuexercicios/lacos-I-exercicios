//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let tab = Number(prompt("Digite um número."))
let i = 0

while(i<=10){
    tabuada = tab*i
    console.log(`${tab} x ${i} = ${tabuada}`)
    i++
}