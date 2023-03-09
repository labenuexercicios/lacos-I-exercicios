let num = Number(prompt("Digite um número para fazer a tabuada dele!"))
let multiplicador = 0

while (multiplicador < 10) {
    multiplicador += 1
    console.log(`${num} x ${multiplicador} = ${num*multiplicador}`)
    
}

console.log("Acabou a tabuada")

let num2 = Number(prompt("Digite um segundo número para fazer a tabuada dele!"))

for (let mult = 1; mult <= 10; mult++){
    let resultado = num2*mult
    console.log(`${num2} x ${mult} = ${num2*mult}`)
}