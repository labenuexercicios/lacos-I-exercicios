let comerCoxinha = prompt("Deseja comer mais uma coxinha?").toUpperCase()
let conta;
conta = 0

while (comerCoxinha === "S") {
    conta = (conta + 2.50)
    comerCoxinha = prompt("Deseja comer mais uma coxinha?").toUpperCase()
    console.log(conta)
}
console.log(`O valor total é ${conta} reais.`)