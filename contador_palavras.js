const texto = "Um texto qualquer agora";

let espacos = texto.trim();

let array = espacos.split(" ");

let contador = 0;

for (let item of array) {
    if (item) {
        contador = contador + 1;
    } 
}
console.log(contador);