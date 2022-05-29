import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();

    if (!admin) { return <CircularProgress /> }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;