import Formulario from './Components/Formulario';
import Header from './Components/Header';
import React, { useState } from 'react';
import Resultado from './Components/Resultado';
import Resumen from './Components/Resumen';
import Spinner from './Components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      plan:'',
      year: ''
    }
  })
  const [cargando, guardarCargando] = useState(false)

  const {datos, cotizacion} = resumen

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner/> : null}
        <Resumen
          datos={datos}
        />
        {!cargando 
        ? <Resultado
            cotizacion={cotizacion}
          />
        : null
      }
      </ContenedorFormulario>
    </Contenedor>
  );
};

export default App;
