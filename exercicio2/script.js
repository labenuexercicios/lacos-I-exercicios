
//Exercício 2
//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

let tabuada = Number(prompt("Insira um número de 1 a 10 para tabular")) 

for(i=1; i<=10; i++){
    console.log(`A tabuada de ${tabuada} =`, tabuada * i)
}
console.log('FIM')