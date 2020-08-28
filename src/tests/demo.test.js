describe('Pruebas en el archivo demo.test.js',()=>{


    test('deben ser iguales los strings', () => {
    
        //1. Inicializacion
        const mensaje = '10';

        //2.Estimulo
        const mensaje2 = `10`;

        //3. Observar el comportamiento
        expect( mensaje ).toBe(mensaje2);

    })


})


