import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Prueba en 02-template-string.js',()=>{
    test('prueba en el metodo getSaludo',()=>{
        const nombre = 'Allan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre)
    });

    test('prueba en el metodo getSaludo sin argumento',()=>{

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Pedro')

    });

})