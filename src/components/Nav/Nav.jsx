import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <NavLink to='/'>        
          <button
            className='navlink'
          >
              Matt Gefen
          </button>
          </NavLink>
          |
          <NavLink to='/'>        
          <button
              className='navlink'
          >
              RadiantMoon
          </button>
        </NavLink>
      </div>
      <div></div>
      <div className='nav-right'>
        <a className='navlink' href="/#about" style={{textDecoration: "none"}}>About</a>
        {/* <div> | </div> */}
        <a className='navlink' href="/#experience" style={{textDecoration: "none"}}>Experience</a>
        {/* <div> | </div>  */}
        <a className='navlink' href="/#projects" style={{textDecoration: "none"}}>Projects</a>
      </div>

      {/* <NavLink to='/projects'>        
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
            className='navlink'
        >
              Projects
        </motion.button>
        </NavLink> */}
      {/* <NavLink to='/about'>About</NavLink> */}
    </nav>
  )
}

export default Nav