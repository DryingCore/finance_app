import { useState } from 'react';
import { Container } from '@mui/material';

import ButtonsLeft from './pages/Dashboard/ButtonsLeft.tsx';
import MainInterface from './pages/Dashboard/MainInterface.tsx';
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
      {/*
      <ButtonsLeft onEdit={handleEdit} />
      <MainInterface value={value} />
      */}

      <h1 className='text-white bg-red-500'>hello world</h1>
    </Container>
  );
}

export default App;
