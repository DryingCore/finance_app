import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './pages/Login/LoginForm.tsx'; // Importe o componente LoginForm correto
import Dashboard from './pages/MainApplication.tsx'; // Importe o componente Dashboard correto
import PrivateRoute from './PrivateRoute';
import './styles/main.css';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};