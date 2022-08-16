// FOR
/*for (inicialização de condição; condição de continuação; uma alteração) // condições separadas por ;
{um conjunto de ações}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
let numero = Number(prompt("Digite um número de 1 a 10"))
for(let i = 0; i <= numero; i++) {
    console.log(i*numero)
}
console.log("Tabuada de", numero);