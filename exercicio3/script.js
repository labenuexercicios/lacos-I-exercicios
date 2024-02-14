//Exercício 3
//Crie um array com 5 strings. Faça um programa que percorra este array e 
//imprima as strings em formato de ranking, como no exemplo abaixo:

const array5 = ["Hoje", "é", "terça", "feira!", "Está frio!", "Estou", "revendo", "a", "aula", "mas", "hoje", "está", "calor!!!!"]

for(let i = 0; i < array5.length; i++){
    console.log(`"${i+1} : ${array5[i]}"`)
}