import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';


describe('Pruebas en <CounterApp />',()=>{

    /*     test('debe de mostrar el mensaje "Hola, Soy Paco"', () => {
        const saludo = 'Hola, Soy Paco';

        const { getByText } = render( <PrimeraApp saludo={saludo} /> );

        expect(getByText(saludo)).toBeInTheDocument();
    }) */
    let wrapper = shallow(<CounterApp />);;
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });


    test('debe de mostrar el el valor por defecto de 100 ', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp   value={value}/>);
        const Countertext1= parseInt(wrapper.find('h2').text());
        expect(Countertext1).toBe(value);
        
    }) 

    test('debe de restar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const Countertext3= parseInt(wrapper.find('h2').text());

        expect(Countertext3).toBe(-1);
        //console.log(Countertext)

    });

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const Countertext2= parseInt(wrapper.find('h2').text());

        expect(Countertext2).toBe(1);
        //console.log(Countertext)
    })   

    test('debe hacer reset del valor', () => {
        wrapper.find('button').at(1).simulate('click');
        const Countertext4= parseInt(wrapper.find('h2').text());
        expect(Countertext4).toBe(0);
        //console.log(Countertext)

    });
    


    

})