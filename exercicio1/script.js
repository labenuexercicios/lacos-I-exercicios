let resposta = prompt(
  "Você deseja comer mais coxinhas? Digite S para sim ou N para não"
);

let conta = 0;

while (resposta.toUpperCase() === "S") {
  conta = conta + 2.5;
  resposta = prompt(
    "Você deseja comer mais coxinhas? Digite S para sim ou N para não"
  );
}
console.log(conta);

//---------------

// const contaCoxinhas = (res) => {
//     let conta = 0

//     while(res.toUpperCase() === "S"){
//         conta = conta + 2.5
//         res = prompt("Você deseja comer mais coxinhas? Digite S para sim ou N para não")
//     }
//     console.log(conta)
// }

// contaCoxinhas(resposta)
