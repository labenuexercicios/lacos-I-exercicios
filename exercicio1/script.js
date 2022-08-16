let pergunta = prompt("Quer  uma coxinha")
let valroTotal = 0


while(pergunta !== "não"){
    valroTotal = valroTotal + 2.50
    pergunta = prompt("Quer mais uma coxinha?")
}
alert(`A conta deu ${valroTotal}`)