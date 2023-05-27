import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
   return (
    <nav className='nav'>
        <div>
        <h4>Header</h4>
        </div>
        <div className='Btn'>
        <button id="btn1"><Link to="/signup">Signup</Link></button>
      <button id="btn2"><Link to="/profile">Profile</Link></button>
      </div>
  </nav>
  )
}

export default Navbar