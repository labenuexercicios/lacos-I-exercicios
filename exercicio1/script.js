
let messagem = "Quer comer um coxinha?"
let valorConta = 0.0


while (prompt(messagem).toUpperCase() === "S") {
    valorConta += 2.50
    messagem = "Quer comer mais um coxinha?"

}
console.log(`O valor da sua conta foi: R$${valorConta.toLocaleString("pt-br")}.`)