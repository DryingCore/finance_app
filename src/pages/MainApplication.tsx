import React from 'react';
import { Container } from '@mui/material';
import ButtonsLeft from './Dashboard/ButtonsLeft'; // Corrigido o caminho para ButtonsLeft
import MainInterface from './Dashboard/MainInterface'; // Corrigido o caminho para MainInterface

const MainApplication: React.FC = () => {
    return (
        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonsLeft />
            <MainInterface />
        </Container>
    );
};

export default MainApplication;
