const melhoresFrutas = ["Manga", "Abacate", "Uva", "Morango", "Banana"]

//for
for(let i=0; i<melhoresFrutas.length; i++){
    console.log(`${i+1}. ${melhoresFrutas[i]}`)
}

//while
let i = 0
while(i < melhoresFrutas.length){
    console.log(`${i+1}. ${melhoresFrutas[i]}`)
    i++
}

função
const ranquearArray = (array) => {
    for(let i=0; i<array.length; i++){
        console.log(`${i+1}. ${array[i]}`)
    }
}