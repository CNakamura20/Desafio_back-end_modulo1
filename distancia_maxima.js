const linhas = input.trim().split("\n");
const coordenadas = [];

for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseInt(coord[0], 10),
        y: parseInt(coord[1], 10)
    });
}
console.log(coordenadas);