import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './pages/Login/LoginForm'; // Corrigido o caminho para LoginForm
import MainApplication from './pages/MainApplication'; // Corrigido o caminho para MainApplication
import PrivateRoute from './pages/PrivateRoute';
import './styles/main.css';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/dashboard" component={MainApplication} /> {/* Usar MainApplication */}
          <Redirect to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
