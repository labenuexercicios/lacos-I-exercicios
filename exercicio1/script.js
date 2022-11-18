let nome = prompt("Digite seu nome, por favor: ")
let comerCoxinhas = prompt(`${nome}, você deseja comer mais coxinhas? Digite S para SIM e N para NÃO`)
let conta = 2.50;

while(comerCoxinhas === "S") {
    conta = conta + 2.50
    comerCoxinhas = prompt(`${nome}, você deseja comer mais coxinhas? Digite S para SIM e N para NÃO`)
    console.log(conta)
    if(comerCoxinhas === "N") {
        alert(`O valor total da sua conta é ${conta}`)
        console.log(`O valor total da sua conta é ${conta}`)
    }
}
