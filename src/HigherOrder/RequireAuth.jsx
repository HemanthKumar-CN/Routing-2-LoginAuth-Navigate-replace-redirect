import React, { Children, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

const RequireAuth = ({children}) => {
    const {isAuth}=useContext(AuthContext);
    // const location =useLocation();
    const {pathname} =useLocation();
    // console.log("reqAuth",location)
    if(isAuth)
    {
        return children
    }
    else
    {
        return <Navigate to="/login" state={{from: pathname}}
        replace />
    }
  
}

export default RequireAuth