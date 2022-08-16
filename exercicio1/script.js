let pergunta = prompt('Deseja mais coxinhas? \n Digite S para Sim e N para Não.')
let soma = 0

while(pergunta=='S'){
    soma=soma+2.50
    pergunta=prompt('Deseja mais coxinhas? \n Digite S para Sim e N para Não.')
}
console.log('Total da conta',soma)