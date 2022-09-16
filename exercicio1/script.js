let coxinha = prompt('Você deseja mais um pouco de coxinha? digite "S" pra sim e "N" pea não').toUpperCase()

let conta = 0



while(coxinha === "S" && coxinha !== "N"){
   conta +=2.5
  coxinha = prompt('Você deseja mais um pouco de coxinha? digite "S" pra sim e "N" pea não').toUpperCase()
}
console.log(`valor da conta é de ${conta}`)



