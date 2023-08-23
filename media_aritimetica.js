const lista = [2, 3, 4];

let quantidadeTotal = 0;

for (let dinheiro of lista) {
    quantidadeTotal = quantidadeTotal + dinheiro;
}
let media = quantidadeTotal / lista.length;

console.log(media);