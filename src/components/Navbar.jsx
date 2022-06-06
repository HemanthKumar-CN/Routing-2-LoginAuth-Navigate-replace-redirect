import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const {isAuth, logout}=useContext(AuthContext)
  const navigate=useNavigate();
  return (
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/posts">Posts</Link>
      <button onClick={()=> {
        if(isAuth)
        {
          logout()
          navigate("/");
        }
        else
        {
          navigate("/login")
        }
      } }> {isAuth ? "Logout" : "Login"} </button>
    </div>
  )
}

export default Navbar