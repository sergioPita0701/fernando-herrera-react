import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Preuba en 09-promesas.test', () => {
    test('PRomesas getHeroeById debe retorno un heroe recibiendo un id', (done) => {
        //1 inicialziacion
        const id = 1;
        const heroeTest = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        //2 estimulo
        const heroe = getHeroeByIdAsync(id)
            .then(heroe=>{
                expect(heroe).toEqual(heroeTest);
                done();
            });
        // expect(heroe).toEqual(heroeTest);
    });

    test('getHeroeByIdAsync debo obtner un error', (done) => {
        //1 inicialziacion
        const id = 100;
        //2 estimulo
        getHeroeByIdAsync(id)
            .catch(error=>{
                console.log(error);
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            });
    });

})