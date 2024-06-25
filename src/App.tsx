import { Container } from '@mui/material'
import './styles/main.css'
import Dashboard from './pages/Dashboard'

function App() {
  return (

    <Container sx={{ backgroundColor: 'black', height: '100vh' }}>
      <Dashboard />
    </Container>
  )
}

export default App
