import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/navProfile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={nav_logo} alt="" className="nav-logo" />
        <img src={navProfile} alt="Profile" className="nav-profile" />

    </div>
  )
}

export default Navbar