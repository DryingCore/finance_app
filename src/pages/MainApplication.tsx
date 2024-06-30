import { Container } from '@mui/material';
import ButtonsLeft from './Dashboard/ButtonsLeft.tsx';
import MainInterface from './Dashboard/MainInterface.tsx';
import './styles/main.css';


export default function MainApplication() {

    return (
        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonsLeft />
            <MainInterface
        </Container>
    );
}