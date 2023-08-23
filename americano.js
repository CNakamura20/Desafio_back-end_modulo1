const numeros = [1, 3, 2, 1];


let soma = 0;

for (let numero of numeros) {
    soma = soma + numero;
}

while (soma > numeros.length) {
    soma = soma - numeros.length;
}
console.log(soma);
