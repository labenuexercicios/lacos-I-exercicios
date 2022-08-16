
let dadoInput = Number(prompt("Você quer comer mais coxinhas? \n 1 - Sim \n 0 - Não"))
let somar = 2.50

while(dadoInput !== 0){
    somar += dadoInput
    dadoInput = Number(prompt("Você quer comer mais coxinhas? \n 1 - Sim \n 0 - Não"))

}
console.log(somar);
