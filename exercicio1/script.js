preco=2.50
let comida = prompt("Desejar pedir mais coxinhas? \nDigite \"S\" para sim \n ou \n\"N\" para não.").toUpperCase()
let conta = 0

while (comida === "S"){
comida = prompt("Desejar pedir mais coxinhas? \nDigite \"S\" para sim \n ou \n\"N\" para não.").toUpperCase()
conta=conta+preco
if(comida!=="S")
console.log("Valor final de sua compra:", conta)
}
