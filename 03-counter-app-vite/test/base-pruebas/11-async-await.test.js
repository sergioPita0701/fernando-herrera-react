import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Preuba en 11-async-await.test', () => {
    test('get imagen deve retornar una rl de la imagen error', async () => {
        const resp = await getImagen();
        expect( resp).toBe('No se encontro la imagen')
    })
})