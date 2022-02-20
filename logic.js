const { validatePath } = require('./utils.js');

const directions = { O: [0, 1], E: [0, -1], S: [1, 0], N: [-1, 0] };

const catchPokemon = (steps) => {
    let visited = { x0y0: 0 };

    let pokemon = 1;
    if (validatePath(steps)) {
        let xAxis = 0;
        let yAxis = 0;

        for (let i = 0; i < steps.length; i++) {
            const [movimentX, movimentY] = directions[steps.charAt(i)];

            xAxis += movimentX;
            yAxis += movimentY;

            pokemon += visited[`x${xAxis}y${yAxis}`] ?? 1;
            visited[`x${xAxis}y${yAxis}`] = 0;
        }

        return pokemon;
    } else {
        return null;
    }
};
module.exports = { catchPokemon };
