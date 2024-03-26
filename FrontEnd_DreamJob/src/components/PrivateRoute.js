import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import  useAuth from '../hooks/useAuth';

export default function PrivateRoute({ component: Component, ...rest }) {
   const { getUser } = useAuth();

   return (
       <Route
           {...rest}
           render={(props) =>
               getUser() ? <Component {...props} /> : <Redirect to="/login" />
           }
       />
   );
}
