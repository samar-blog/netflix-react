import React,{useEffect,useState} from 'react';
import { auth } from '../firebase/config';
import logotip from './assets/logo.png';

const Navbar = ({user}) => {

   const[fixed, setFixed] = useState(false)
   useEffect(()=> { 
    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 100) { 
        setFixed(true) 
      } else { 
        setFixed(false);
      }
    } )
   })

  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
      <a href="#" className='brand'>
        <img src={logotip} alt="logotip" />
      </a>
        <button onClick={()=> auth.signOut()} className='authButton'>
        <img src={user.photoURL} alt="user auth" className='userImage' />
        </button>
    </div>
  )
}

export default Navbar;