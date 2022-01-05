import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='nav-bar'>
      <NavLink to='/'>Home</NavLink>
    </nav>
  )
}

export default Nav