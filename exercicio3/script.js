const bestAnimes = ["Jujutsu kaisen","Akame ga kill","Chainsaw man","Blue lock","Boku no hero"]


let posicao = 0
while (posicao < bestAnimes.length) {
    console.log(`${posicao+1} - ${bestAnimes[posicao]}`)    
    posicao++
}

console.log("-------------------------------------")

for (let posicao = 0; posicao<bestAnimes.length; posicao+=1){
    console.log(`${posicao+1} - ${bestAnimes[posicao]}`)    
}
