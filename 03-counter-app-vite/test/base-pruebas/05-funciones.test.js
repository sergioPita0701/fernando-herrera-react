import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Preuba en 05-funciones', () => {
    test('getUSer debe retorno un objeto', () => {
        //1 inicialziacion
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        //2 estimulo
        const user = getUser();

        //3.assert ...resultado esperado
        expect(user).toEqual(testUser);

    });
    test('getUSerActivo debe retorno un objeto', () => {
        //1 inicialziacion
        const name = 'Sergio'

        const testUser = {
            uid: 'ABC567',
            username: name
        };

        //2 estimulo
        const user = getUsuarioActivo(name);

        //3.assert ...resultado esperado
        expect(testUser).toEqual(user);

    });
})