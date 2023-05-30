let numero = Number(prompt("Digite um número para saber sua tabuada"))

//for
for(let i=1; i<=10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}

//while
let i = 1

while(i <= 10){
    console.log(numero * i);
   i++
}

//função
const tabuada = (num) => {
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

tabuada(numero)