const lista = [12, 18, 2, 8];

let idadePermitida = [];

for (let idade of lista) {
    if (idade >= 18) {
        idadePermitida.push(idade);
    }
}

let menorIdade = idadePermitida[0];

for (let x of idadePermitida) {
    if (x < menorIdade) {
        menorIdade = x;
    }

}

if (idadePermitida.length === 0) {
    console.log("CRESCA E APARECA");
} else {
    console.log(menorIdade);
}