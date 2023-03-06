import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Preuba en 02-tempalte-string', () => {
    test('getSado debe retorno Hola', () => {
        //1 inicialziacion
        const name = "sergio";

        //2 estimulo
        const message = getSaludo(name);

        //3.assert ...resultado esperado
        expect(message).toBe(`Hola ${name}`);

    });
})