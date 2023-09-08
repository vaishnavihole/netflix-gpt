import { useRef, useState } from 'react';
import Header from './Header.js';
import {checkValidData} from "../utils/validate.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js"
import {USER_AVATAR} from "../utils/constants.js"


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )

      .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR,

        })
        .then(() => {
        })
        .catch((error) => {
         setErrorMessage(error.message);
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage)
        
      });
    }

    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage)
      });
    }
  };

   const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} 
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto 
       right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"} </h1>

        <input type="text" 
        ref={email}
        placeholder="Email Address"
        className='p-3 my-4 w-full bg-gray-700' />

        <input type="password" 
        ref={password}
        placeholder="Password"
        className='p-3 my-4 w-full bg-gray-700' />


        {!isSignInForm && 
        <input 
        type="text" 
        placeholder="Full Name"
        className='p-3 my-4 w-full bg-gray-700' />}

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button className="p-3 my-6 
        bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-6 cursor-pointer" 
        onClick={toggleSignInForm}>
        {isSignInForm ? "Now to Netflix? Sign Up Now" :
        "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;