import { Container } from '@mui/material';

import ButtonsLeft from './pages/Dashboard/ButtonsLeft.tsx';
import MainInterface from './pages/Dashboard/MainInterface.tsx';
import './styles/main.css';
import LabelBottomNavigation from './pages/Dashboard/Teste.tsx';

function App() {

  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* 
      <ButtonsLeft />
      <MainInterface />
      */}
      <LabelBottomNavigation/>
    </Container>
  );
}

export default App;
