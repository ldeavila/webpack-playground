import {toGrammaticalNumber} from "./grammatical-number-service.js";

describe('grammatical-number-service', () => {

    describe('toGrammaticalNumber()', () => {

        it('should return the word One', () => {
            expect('One').toEqual(toGrammaticalNumber('1'));
        });

        it('should return the word Two', () => {
            expect('Two').toEqual(toGrammaticalNumber('2'));
        });

        it('should return the word Three', () => {
            expect('Three').toEqual(toGrammaticalNumber('3'));
        });

        it('should return the word Four', () => {
            expect('Four').toEqual(toGrammaticalNumber('4'));
        });

        it('should return the word Five', () => {
            expect('Five').toEqual(toGrammaticalNumber('5'));
        });

    });
});
