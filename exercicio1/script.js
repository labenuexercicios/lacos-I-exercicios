
let coxinha = prompt("Você deseja mais coxinhas? \n(S)PARA SIM \n(N)PARA NÃO ").toUpperCase()
let conta = 0
while (coxinha !=="N") {
    coxinha = 2.50
    conta += coxinha
    coxinha = prompt("Você deseja mais coxinhas? \n(S)PARA SIM \n(N)PARA NÃO ").toUpperCase()
} console.log(`A soma das coxinhas é :${conta} reais`);

