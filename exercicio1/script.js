// WHILE
// let inicializaçãoDasVariáveis
/*while (condição de continuação)
{um conjunto de ações
uma alteração}*/

let comida = prompt('Você deseja comer mais coxinhas?\nDigite S para Sim e N para Não:');
let conta = 0
while(comida === 'S'){
        conta = conta + 2.50
        comida = prompt('Você deseja comer mais coxinhas?\nDigite S para Sim e N para Não:')
}
console.log(conta);