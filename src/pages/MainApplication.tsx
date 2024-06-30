import React from 'react';
import { Container } from '@mui/material';
import ButtonsLeft from './Dashboard/ButtonsLeft.tsx';
import MainInterface from './Dashboard/MainInterface.tsx';

export default function MainApplication() {
    return (
        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonsLeft />
            <MainInterface />
        </Container>
    );
}
