let resposta = String(prompt("Comer mais uma coxinha? - S para SIM ou N para NÃO")).toLocaleUpperCase()

let numCoxinhas = 0
let conta = 0

while (resposta !== "N"){
    numCoxinhas += 1
    conta += 2.50
    console.log("Você pediu mais uma coxinha!")
    resposta = String(prompt("Comer mais uma coxinha? - S para SIM ou N para NÃO")).toLocaleUpperCase()
}

console.log(`
Conta
Coxinhas: ${numCoxinhas}
valor: R$${conta.toFixed(2)}
`)