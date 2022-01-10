import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className='navbar' style={{background: '#f8f9fa'}}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default Nav