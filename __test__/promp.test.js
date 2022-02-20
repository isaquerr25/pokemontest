jest.mock('readline');
const readline = require('readline');
const { catchPokemon } = require('../logic.js');

describe('Test pokemon world', () => {
    it('wrong parameter', () => {
        expect(catchPokemon('ASDAC')).toBe(null);
    });
    it('correct response', () => {
        expect(catchPokemon('NSSSSSSSOOOOOOOEEEEEEEEEEEOOOOO')).toBe(19);
    });
});
