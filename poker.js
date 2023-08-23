const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];



function solucao(min, max, valores) {
    let numerosOk = []
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            numerosOk.push(valor)
        }
    }
    console.log(numerosOk)
}


solucao(min, max, valores)
