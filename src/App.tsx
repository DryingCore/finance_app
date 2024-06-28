import { useState } from 'react';
import { Container } from '@mui/material';

import ButtonsLeft from './pages/Dashboard/ButtonsLeft.tsx';
import MainInterface from './pages/Dashboard/MainInterface.tsx';
import './styles/main.css';
import EditTransaction from './pages/EditTransaction/EditTransaction.tsx';

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
      {/*
      <ButtonsLeft onEdit={handleEdit} />
      <MainInterface value={value} />
      */}
      <EditTransaction />
    </Container>
  );
}

export default App;
