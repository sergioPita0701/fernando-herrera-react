import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Preuba en 08-imp-exp.test', () => {
    test('getHeroeById debe retorno un heroe recibiendo un id', () => {
        //1 inicialziacion
        const id = 1;
        const heroeTest = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        //2 estimulo
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(heroeTest);
    });
    test('getHeroeById no debe retorno un heroe recibiendo un id', () => {
        //1 inicialziacion
        const id = 100;

        //2 estimulo
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });


    test('getHeroesByOwner Dc', () => {
        //1 inicialziacion
        const owner = 'DC';
        const heroesTest = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        //2 estimulo
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        //mejor
        expect(heroes).toEqual(heroes.filter((heroes) => heroes.owner === owner));

        expect(heroes).toEqual(heroesTest);
    });
    test('getHeroesByOwner Marvel', () => {
        //1 inicialziacion
        const owner = 'Marvel';
        const heroesTest = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]
        //2 estimulo
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        //mejor
        expect(heroes).toEqual(heroes.filter((heroes) => heroes.owner === owner));

        expect(heroes).toEqual(heroesTest);
    });
})