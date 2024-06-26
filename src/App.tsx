import { Container } from '@mui/material'
import ButtonsLeft from './pages/ButtonsLeft.tsx'
import MainInterface from './pages/MainInterface.tsx'
import './styles/main.css'

function App() {
  return (
    <Container sx={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonsLeft />
      <MainInterface />
    </Container >
  )
}

export default App
