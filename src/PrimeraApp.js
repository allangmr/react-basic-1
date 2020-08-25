import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';
//FC
const PrimeraApp = ({saludo, subtitulo}) => {

    return(
        <>
            <pre>{ saludo }</pre>
            <p>{subtitulo}</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
