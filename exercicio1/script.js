let input = prompt('Sei que parece uma pergunta boba, mas você quer mais uma coxinha? escreva "s" ou "n"')
let conta = 0



while(input == 's'){
    alert('Aqui está a sua coxinha!!')
    conta = (conta+2.5)
    input = prompt('Sei que parece uma pergunta boba, mas você quer mais uma coxinha? escreva "s" ou "n"')
} 

alert(`Que pena que você não quer mais coxinha, sua conta deu o total de R$${conta}`)