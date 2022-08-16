const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
let ranking = 0

for(let i=0; i < maioresPaises.length; i++) {
    ranking = ranking + 1
    console.log(`${ranking} - ${maioresPaises[i]}`)
}
