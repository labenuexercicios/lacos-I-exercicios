let soma = 0;
let querCoxinhas = prompt("Quer uma coxinha? \n -\"S\"-Sim\n -\"N\"-Não").toLowerCase();
let valorConta = 0;


while (querCoxinhas === "s") {

    if (querCoxinhas != "s" && querCoxinhas != "n") {
        querCoxinhas = prompt("Não entendi. Quer mais uma coxinha? \n -\"S\"-Sim\n -\"N\"-Não").toLowerCase();
    } else {
        soma++
        valorConta += 2.50
        querCoxinhas = prompt("Quer mais uma coxinha? \n -\"S\"-Sim\n -\"N\"-Não").toLowerCase();

    }

}

if (soma === 0) {
    console.log("Você não comeu coxinha")
} else {
    console.log(`Você  comeu ${soma} coxinhas
Valor da conta foi R$${valorConta}`)
}
