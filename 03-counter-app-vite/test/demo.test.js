
describe('demo Component', () => {

    test('OK', () => {
        //1 inicialziacion
        const mesaga1 = 'hola mundo';

        //2 estimulo
        const mesaga2 = mesaga1.trim();

        //3.assert ...resultado esperado
        expect(mesaga1).toBe(mesaga2);

    });

});

