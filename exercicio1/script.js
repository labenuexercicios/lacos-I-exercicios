
let conta = 0
let quantidade = 0
let coxinhas = prompt('Deseja comer mais coxinhas? ')
while (coxinhas !== 'n' && coxinhas !== null) {
    conta += 2.5
    coxinhas = prompt('Deseja comer mais coxinhas? ')
    quantidade += 1
}
console.log(`Você comeu ${quantidade} de coxinhas!! Valor total: ${conta} R$ `)
