import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from './helper';

const ContenedorResumen = styled.div`
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`;

const Resumen = ({datos}) => {
    
    const {marca, year, plan} = datos
    
    if(marca === '' || year === '' || plan === '') return null;
    else{
        return(
            <ContenedorResumen>
                <h2>Resumen de cotizacion</h2>
                <ul>
                    <li>Marca: { primerMayuscula(marca) }</li>
                    <li>Plan: { primerMayuscula(plan) }</li>
                    <li>Año del Auto: {year} </li>
                </ul>
            </ContenedorResumen>
        )
    };  
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
};

export default Resumen;