
let numero = Number(prompt('Digite um número: '))
const tabuada = (numero) => {
    console.log(`--- TABUADA DO ${numero} ---`)
    for (i = 0; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${numero * i}`)
    }
}
tabuada(numero)
