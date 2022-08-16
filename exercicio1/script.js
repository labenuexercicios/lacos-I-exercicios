let resp = prompt("Deseja comer uma coxinha? ")
let conta = 0


while(resp === 'sim'){
    resp = prompt('Deseja comer mais uma? ')
    conta += 2.50
    if(conta > 25){
        alert('voce vai morrer asim!!!')
    }
}
    alert(`Valor total da conta: ${conta}`)

