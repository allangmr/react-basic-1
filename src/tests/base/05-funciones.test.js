import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05-funciones',()=>{

    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
    });

    test('getUserActivo debe de retornar un objeto', () => {
        const nombre = 'Roberto';
        const userTestActivo = {
            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toEqual(userTestActivo)
    })
    

})