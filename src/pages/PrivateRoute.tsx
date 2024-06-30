import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    component: React.ComponentType<String>;
    path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    const renderRoute = (props: PrivateRouteProps) => {
        if (isAuthenticated) {
            return <Component {...props} />;
        } else {
            return <Redirect to="/login" />;
        }
    };

    return <Route {...rest} render={renderRoute} />;
};

export default PrivateRoute;
