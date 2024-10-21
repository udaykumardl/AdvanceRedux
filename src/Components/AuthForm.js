import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { AuthenticationHandler } from './store';
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const isAuthenticated=useSelector(state=>state.isAuthenticated)


    const onSubmitHandler=(e)=>{
       e.preventDefault();
       dispatch(AuthenticationHandler())
       navigate('/userprofile')

    }
  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
        <button type='submit'>Login</button>
    </form>
  )
}

export default AuthForm;