
console.log("EXERCICIO I")
console.log("")
let conta = 0

let resposta = prompt("Deseja comer mais coxinhas? (S/N)").toUpperCase()

while(resposta!=="N"){
    console.log("O valor atual de sua conta é:",conta+=2.50)
    resposta = prompt("Deseja comer mais coxinhas? (S/N)").toUpperCase()
}
console.log("O valor final da conta é:",conta)


