import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
        <h1 className='logo'>React Books App</h1>
        </div>
        <div>
        <Link to = "/Favorite"> <h3> Your Favorites </h3></Link>
        </div>

      
    </div>
  )
}

export default Navbar
