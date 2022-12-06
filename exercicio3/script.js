// FOR COM ARRAYS
// o i começa na posição 0, não só para números, porque como é array, vai pela posição do array

const array = ["uva", "abacaxi", "melancia", "laranja", "maracuja"];
for(let i = 0; i <= array.length; i++){
//console.log(`${i} - ${array.reverse([i-1])}`);
console.log(`Fruta nº ${i} ${array[i]}`)
}