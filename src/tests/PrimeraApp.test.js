import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp />',()=>{

    /*     test('debe de mostrar el mensaje "Hola, Soy Paco"', () => {
        const saludo = 'Hola, Soy Paco';

        const { getByText } = render( <PrimeraApp saludo={saludo} /> );

        expect(getByText(saludo)).toBeInTheDocument();
    }) */
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = ' Hola, Soy Paco ';
        const wrapper = shallow(<PrimeraApp  saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();

    });


    test('debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = ' Hola, Soy Paco ';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp  saludo={saludo} subtitulo={subTitulo}/>)

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);
        
    })
    
    


    

})