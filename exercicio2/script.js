/* Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**: */


function tabuada () {

let numero = prompt("Forneça um número de 1 a 10")

    for(let i = 1 ; i <= 10 ; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}
tabuada()
