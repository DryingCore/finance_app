import { useState } from 'react';
import { Container } from '@mui/material';
import ButtonsLeft from './pages/ButtonsLeft.tsx';
import MainInterface from './pages/MainInterface.tsx';
import './styles/main.css';

function App() {
  const [value, setValue] = useState(1600);

  const handleEdit = () => {
    const newValue = prompt('Enter new value:');
    if (newValue) {
      setValue(Number(newValue));
    }
  };

  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonsLeft onEdit={handleEdit} />
      <MainInterface value={value} />
    </Container>
  );
}

export default App;
