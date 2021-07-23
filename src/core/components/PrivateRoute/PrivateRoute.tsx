import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PropTypes from 'prop-types';

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        >
        </Route>
    )
};

interface Props extends RouteProps {
    component: any;
}

PrivateRoute.propTypes = {
    component: PropTypes.any,
}

export default PrivateRoute;
