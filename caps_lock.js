 const input = "AS ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS."

if ((input[0] === input[0].toLowerCase()) && (input.slice(1) === input.slice(1).toUpperCase())) {
    console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());
} else if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else {
    console.log(input);
}