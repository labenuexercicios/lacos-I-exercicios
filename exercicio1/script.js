let coxinha = prompt("Você quer comer mais coxinhas?\n\nSim? - Digite S\nNão? - Digite N");
let conta = 0;

while(coxinha.toLocaleUpperCase()!=="N"){
    conta = conta + 2.50
    coxinha = prompt("Você quer comer mais coxinhas?\n\nSim? - Digite S\nNão? - Digite N")
};

console.log(conta);