let coxinhas = prompt("Você quer coxinha? S/ sim e N/ não")
let conta = 0

while(coxinhas.toLocaleUpperCase() === "S"){
    conta = conta + 2.5
    coxinhas =prompt("Você quer coxinha? S/ sim e N/ não")
} 

console.log(`o valor da sua conta fechou em R$ ${contas}`)