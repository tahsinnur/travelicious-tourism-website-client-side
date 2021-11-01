import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner style={{textAlign:"center", marginTop:"40px", color:"tomato"}} animation="border" />;
    }
    return (
        <Route
            {...rest}
            render={ ({location}) => user.email ? children : <Redirect
                to={{
                    pathname:"/login",
                    state: { from : location }
                }}
            ></Redirect> }
        ></Route>
    );
};

export default PrivateRoute;