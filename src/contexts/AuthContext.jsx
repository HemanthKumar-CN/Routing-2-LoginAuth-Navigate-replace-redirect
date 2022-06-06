import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext=createContext();


export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const {state}=useLocation();
    const navigate=useNavigate();
    // const history=useHistory();
    // console.log(history)

    // console.log("cont","state-",state)
    // console.log("cont","navigate",navigate)
    const login=()=> {
        setIsAuth(true)

        if(state.from)
        {
          navigate(state.from, {replace:true})
        }
        else if(state.from==null)
        {
          navigate("/")
        }
        
    }

    const logout=()=> {
        setIsAuth(false)
        // navigate("/")
      
    }

  return (
    <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
  )
}

