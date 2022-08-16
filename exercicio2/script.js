let num = +prompt("Qual tabuada voce quer")
let numm = +prompt("Quantas vezes repetir?")

for(i=0; i <= numm; i++){
    console.log(`Tabuada do ${num} * ${i} = ${i * num}`);
}