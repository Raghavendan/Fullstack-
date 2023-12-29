import './App.css';
import React,{useState} from 'react';
import { database } from './Firebaseconfig';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom"

function Login() {
  const [login,setlogin]= useState(false)

  const history = useNavigate()
  const handleSubmit=(e,type)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    if(type == 'signup'){
      createUserWithEmailAndPassword(database,email,password).then(data=>{
        console.log("Account created for: ", data.user.email)
        history('/home')
      }).catch(err=>{
        alert(err.code)
        setlogin(true)
      })

    }else{
      signInWithEmailAndPassword(database,email,password).then(data=>{
        console.log("Account created for: ", data.user.email)
        history('/home')
      }).catch(err=>{
        alert(err.code)
        setlogin(true)
      })

    }
    

    
  }
  return (
   <div className='App'>
    <div className='row'>
      <div className={login== false?'activeColor':'pointer'} onClick={()=>setlogin(false)}>SignUp</div>
      <div className={login== true?'activeColor':'pointer'} onClick={()=>setlogin(true)}>Login</div>
    </div>
    <h2>{login?'Login':'SignUp'}</h2>
    <form onSubmit={(e)=>handleSubmit(e,login?'login':'signup')}>
      <input name='email' placeholder='Email'/><br></br>
      <input name='password' type='password' placeholder='Password'/><br></br>
      <button>{login?'Login':'Signup'}</button>

    </form>
   </div>
  );
}

export default Login;