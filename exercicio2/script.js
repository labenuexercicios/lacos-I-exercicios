let numero = Number(prompt('Me diz o número que você quer a tabuada.'))

console.log(`Segue à tabuada de ${numero}`)

for (let i = 0; i < 11; i++) {
    let calculo = numero*i
    console.log(`${numero} * ${i} = ${calculo}`)
    
}