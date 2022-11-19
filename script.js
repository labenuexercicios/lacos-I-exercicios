//ELEMENTOS NECESSÁRIOS
/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração que mude a condição de continuação*/

let num = Number(prompt("Insira um número qualquer \nDigite 0 para encerrar."))

let soma = 0

while(num!=0){
    soma += num
    console.log(soma)
    num = Number(prompt("Insira um outro número qualquer \nDigite 0 para encerrar."))
}
console.log('a soma final foi ' +soma)
