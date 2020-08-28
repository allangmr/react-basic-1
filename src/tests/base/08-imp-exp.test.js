import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import {heroes} from '../../data/heroes';

describe('Pruebas en funciones de heroes',()=>{

    test('debe de retornar heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h=> h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(undefined);
    });


    //debe de retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado


    test('debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroedc = getHeroesByOwner(owner);
        const heroeDatadc = heroedc.filter(hdc=> hdc.owner === owner);
        expect(heroedc).toEqual(heroeDatadc);
    });


    //debe de retornar un arreglo con  los heroes de Marvel
    //length = 2//toBe

    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroemv = getHeroesByOwner(owner);
        const heroeDatamv = heroemv.filter(hmv=> hmv.owner === owner);
        expect(heroemv.length).toBe(2);
    });

    test('debe de retornar [] filtrado vacio si agrupacion de heroe no existe', () => {

        const owner = 'Marvels';
        const heroemv = getHeroesByOwner(owner);
        expect(heroemv).toEqual([]);
    });

    

})