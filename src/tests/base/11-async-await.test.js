import { getImagen }  from "../../base/11-async-await";


describe('Pruebas con asyng-await y fetch',()=>{

    test('debe de retornar el url de una imagen',async()=>{
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});