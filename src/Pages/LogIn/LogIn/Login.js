import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendEmailVerification,sendPasswordResetEmail ,updateProfile } from "firebase/auth";



const Login = () => {
    const [name,setName] =useState('')
  const  [email,setEmail] =useState('')
  const [pass, setPass] = useState('')
  const [error,setError] =useState('')
  const [isLogIn ,setIsLogIn] =useState(false);

  const auth = getAuth();
  
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const history =useHistory();
    const redirect_url =location.state?.from || '/home'
    
    const handleGoogleLogin =() =>{
     return signInUsingGoogle()
     .then(result =>{
      history.push(redirect_url);
    })
    }
    const toggoleSignIn =(e) =>{
        setIsLogIn(e.target.checked);
   
      }
   
      const handleNameChange =(e) =>{
         setName(e.target.value)
      }
   
      const handleEmailChange =(e) =>{
        setEmail(e.target.value);
      }
   
      const handlePassChange =(e) =>{
        setPass(e.target.value);
      }
   
      const handleRegistration =(e) =>{
       e.preventDefault()
       // console.log(email,pass);
        if(pass.length <6){
         setError('password must be at least 6 charactor')
         return;
        };
   
       if(!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
         setError('password must be 2 upper case');
         return;
       }
       
       isLogIn ? proccessLogin(email,pass) : registerNewUser(email,pass)
       
      }
   
      const proccessLogin = (email,pass)=>{
       signInWithEmailAndPassword(auth, email, pass)
       .then(result =>{
         const user =result.user;
         console.log(user);
         setError('')
         history.push(redirect_url)
       })
       
       .catch(error =>{
         setError(error.message)
       })
   
      }
   
      const registerNewUser =(email,pass) =>{
       createUserWithEmailAndPassword(auth,email,pass)
       .then(result => {
         const user =result.user;
         console.log(user);
         setError('')
         verifyEmail()
         setUserName()
         history.push(redirect_url)
       })
       .catch(error =>{
         setError(error.message)
       })
      }
   
      const verifyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then( result =>{
          console.log(result);
        })
      }
   
     const setUserName =() =>{
       updateProfile(auth.currentUser,{displayName:name})
       .then(result =>{ })
     }
   
      const handleResetPass =()=>{
       sendPasswordResetEmail(auth, email)
       .then( result =>{
         
       })
      } 
   

    return (
        <div  className="mx-5 mt-3">
           <form onSubmit={handleRegistration}>
  <h3 className="text-primary">Please {isLogIn? 'LogIn' : 'Register'}</h3>
  {!isLogIn && <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="text" className="form-control" placeholder="your name" id="inputName" required/>
    </div>
  </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" placeholder="input your email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onBlur={handlePassChange} placeholder="input your password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggoleSignIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Are You Already Registerd?
        </label>
      </div>
    </div>
  </div>
  <div  className="row mb-3 text-danger">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogIn? 'LogIn' : 'Register'}</button>
  <br /> <br />
  <button onClick={handleResetPass} type="button" className="btn btn-secondary btn-sm">Reset Password</button>
</form>
        
     <div>-----------------or------------------</div>
            <div>
            <button onClick={handleGoogleLogin} className="btn btn-danger">SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;