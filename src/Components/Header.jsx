import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    color: #FFFFFF;
    font-weight: bold;
    padding: 10px;
`;

const TextoHeader = styled.h1`
    font-family: 'Slabo 27px', serif;
    font-size: 2rem;
    margin: 0;
    text-align: center;
`;

const Header = ({titulo}) => (
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
);

Header.propTypes = {
    titulo: PropTypes.string.isRequired
};

export default Header;