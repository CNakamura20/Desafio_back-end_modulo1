const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]
let jogada0 = [];
let jogada1 = [];


for (let jogador of jogadores) {
    if (jogador.jogada === 0) {
        jogada0.push(jogador.nome)
    } else {
        jogada1.push(jogador.nome)
    }

}

if (jogada0.length === 1) {
    console.log(jogada0[0])
} else if (jogada1.length === 1) {
    console.log(jogada1[0])
} else {
    console.log("NINGUEM");
}



