let inputTratado = input.trim().split("\n")
let senhaCorreta = inputTratado[0];
let senhaDigitada = inputTratado[1];


for (let caracter of senhaCorreta) {
    let checagemIndice = senhaDigitada.indexOf(caracter);
    if (checagemIndice === -1) {
        return console.log("NAO");
    } else {
        senhaDigitada = senhaDigitada.slice(checagemIndice + 1);
    }
}

console.log("SIM")