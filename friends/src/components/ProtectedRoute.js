import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const {
        component: Component,
        ...rest
    }= props

    return <Route {...rest}
        render={(props)=>{
            return localStorage.getItem('token') ? (
                <Component {...props}/>
            ) : (
                <Redirect to='/signup'/>
            )
        }}/>
};

export default ProtectedRoute;