import { string } from "prop-types";
import { retornaArreglo,usState } from "../../src/base-pruebas/07-deses-arr";


describe('Preuba en 07-deses-arr.test', () => {
    test('usState debe retorno un string y un numero', () => {
        //1 inicialziacion

        //2 estimulo
        const [letters,numbers]  = retornaArreglo();

        //3.assert ...resultado esperado
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        
        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));


    });
    test('getUSerActivo debe retorno un objeto', () => {
        const lettersTest = 'ABC';
        const numbersTest =123; 
        const [letters,numbers]  = retornaArreglo(lettersTest,numbersTest);

        //3.assert ...resultado esperado
        expect(letters).toBe(lettersTest);
        expect(numbers).toBe(numbersTest);

    });
})