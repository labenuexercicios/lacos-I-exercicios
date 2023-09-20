function coxinha () {
    let querCoxinha = prompt("Voce deseja comer mais coxinha?")
    let conta = 0;

    while (querCoxinha.toLowerCase() === "sim"){
        conta = conta + 2.50;
        querCoxinha = prompt("Voce deseja comer mais coxinha?")
    }
    console.log(`O valor total da sua conta é de R$ ${conta}`);
    console.log("Nao quer mais coxinha ")

}

coxinha()