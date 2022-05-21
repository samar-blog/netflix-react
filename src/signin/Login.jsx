import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logotip from '../components/assets/logo.png';

const Login = () => {
  return (
    <div className='login'>
      <img src={logotip} alt="logotip" loading='lazy' /> <br />
     <button onClick={signInWithGoogle} className='loginbtn'>
       Sign in with Google
     </button>
    </div>
  )
}

export default Login;