import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    padding: .5rem;
    position: relative;
    text-align: center;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    font-weight: bold;
    margin: 0;
    padding: 1rem;
    text-transform: uppercase;
`;

const Resultado = ({cotizacion}) => {
    
    return(
        (cotizacion === 0) 
        ? <Mensaje>Elije marca, año y tipo de seguro</Mensaje> 
        : 
            (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component='span'
                        className='resultado'
                    >
                        <CSSTransition
                            classNames='resultado'
                            key={cotizacion}
                            timeout={{enter : 500, exit : 500}}
                        >
                        <TextoCotizacion>El total es: $ <span>{cotizacion}</span></TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    )
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
};

export default Resultado;