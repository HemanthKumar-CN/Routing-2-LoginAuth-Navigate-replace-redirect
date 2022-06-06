import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

const Feeds = () => {
  const {isAuth}=useContext(AuthContext);

  // if(isAuth) 
  // {
    return ( <div>Feeds</div>)
  // }
  // else
  // {
  //   return <Navigate to="/login" />
  // }
  
}

export default Feeds