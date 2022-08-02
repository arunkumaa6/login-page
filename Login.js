// import React from 'react';
import {useState,useContext} from 'react'
import Password from '../password.json';
import {statecontext} from '../statecontext/Context'


function Login() {
    const {state,dispatch}=useContext(statecontext);
    localStorage.setItem('isLoggedin',true)
    
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    function getName(event){
        setName(event.target.value)
    }

    function getPassword(event){
        setPassword(event.target.value)
    }

    function Submit(event){
        event.preventDefault();
        Password.forEach((value)=>{
            if(value.username==name && value.password==password){
                dispatch({
                    type:"login",
                    payload:{isAuthenticated: true}
                })
            }
            else{
                setError('Invalid password')
            }
        })
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <form>
            <input type='text' name='name' placeholder='userName' onChange={getName}></input><br></br><br></br>
            <input type='password' name='password' placeholder='password' onChange={getPassword}></input>
            <p>{error}</p><br></br>
            <button onClick={Submit}>submit</button>
        </form>
    </div>
  )
}

export default Login