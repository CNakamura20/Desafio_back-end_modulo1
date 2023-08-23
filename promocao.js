const precos = [200, 150, 50, 100];

let menorvalor = precos[0];

for (let preco of precos) {
    if (preco < menorvalor) {
        menorvalor = preco;
    }
}

let soma = 0;
let desconto = menorvalor / 2;

for (let preco of precos) {
    soma = soma + preco;
}

if (precos.length >= 3) {
    soma = soma - desconto;
}

console.log(soma);

