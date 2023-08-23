const carta = "K"

function solucao(carta) {
    let manilha = ""

    if (carta === "Q") {
        manilha = "J";
        console.log(manilha);
    } else if (carta === "J") {
        manilha = "K";
        console.log(manilha)
    } else if (carta === "K") {
        manilha = "A";
        console.log(manilha);
    } else if (carta === "A") {
        manilha = "2";
        console.log(manilha);
    } else if (carta === "2") {
        manilha = "3";
        console.log(manilha);
    } else if (carta === "3") {
        manilha = "Q";
        console.log(manilha);
    }
}
solucao(carta);

