#!/bin/bash
const readline = require('readline');
const { catchPokemon } = require('./logic.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Ajude Ash a capturar os pokemons');
console.log('Para movê-lo pelo mapa use:');
console.log(
    '(N) para o norte, (S) para o sul, (E) para o este  e (O)  para o oeste',
);
console.log(
    'Sabendo disso digite a sequencia do caminho que ele deve percorrer',
);

rl.question('Digite a sequencia : ', function (steps) {
    let pokemons = catchPokemon(steps);
    if (pokemons) {
        console.log(`Quantidade de pokemons capturados: ${pokemons}`);
    } else {
        console.log('O caminho que digitou contém caracteres inválidos');
    }

    rl.close();
});
