import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
  const [LoginCreds, setLoginCreds] = useState({})

  const {isAuth,login}=useContext(AuthContext)
 
const navigate=useNavigate();
  const handleval=(e)=> {
    const {name,value}=e.target;

    setLoginCreds({
      ...LoginCreds, 
      [name]:value
    });

    
    // console.log(LoginCreds)
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={handleval} name="user" type="email" placeholder='Username' />
      <br />
      <input onChange={handleval} name="password" type="password" placeholder='password' />
      <br />
      <button onClick={()=> {
        login()
        // navigate("/feeds")
      }}>Submit</button>
    </div>
  )
}

export default Login