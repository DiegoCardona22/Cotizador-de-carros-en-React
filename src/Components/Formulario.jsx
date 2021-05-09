import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from './helper';

const Campo = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    -webkit-appearance: none;
    border: 1px solid #E1E1E1;
    display: block;
    padding: 1rem;
    width: 100%;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Error = styled.div`
    background-color: red;
    color: white;
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
`;

const Button = styled.button`
    background-color: #00838F;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    transition: background-color .4s ease;
    width: 100%;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Formulario = ({guardarResumen, guardarCargando}) => {
    
    const [datos, guardarDatos] = useState({
        marca: '',
        plan:'',
        year: ''
    });

    const [error, guardarError] = useState(false)
    
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    } 
    const cotizarSeguro = e =>{
        e.preventDefault();
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false)
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(year);
        
        resultado -= (( diferencia * 3 ) * resultado) / 100;
        resultado = calcularMarca(marca) * resultado;
        const incrementoPlan = obtenerPlan(plan)
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2)
        guardarCargando(true);
        setTimeout(() => {
            guardarCargando(false);
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            })
        },3000)
    }    
    const {marca, year, plan} = datos;
    return(
        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marcas</Label>
                <Select
                    value={marca}
                    name='marca'
                    onChange={obtenerInformacion}
                >
                    <option value=''>--Seleccione--</option>
                    <option value='Americano'>Americano</option>
                    <option value='Europeo'>Europeo</option>
                    <option value='Asiatico'>Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    value={year}
                    name='year'
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    checked={plan === 'basico'}
                    name='plan'
                    onChange={obtenerInformacion}
                    type='radio'
                    value='basico'
                /> Básico
                <InputRadio
                    checked={plan === 'completo'}
                    name='plan'
                    onChange={obtenerInformacion}
                    type='radio'
                    value='completo'
                /> Completo
            </Campo>
                <Button type='submit'>
                    Cotizar
                </Button>
        </form>
    );
};

Formulario.propTypes = {
    guardarCargando: PropTypes.func.isRequired,
    guardarResumen: PropTypes.func.isRequired
};

export default Formulario;