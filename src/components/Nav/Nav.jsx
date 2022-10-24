import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='navbar' style={{background: '#f8f9fa'}}>
      <NavLink to='/'>        
        <button
            className='navbar'
        >
              Matt Gefen
        </button>
        </NavLink>
      <NavLink to='/'>        
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
            className='navlink'
        >
              About
        </motion.button>
        </NavLink>
      <NavLink to='/projects'>        
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
            className='navlink'
        >
              Projects
        </motion.button>
        </NavLink>
      <NavLink to='/contact'>        
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
            className='navlink'
        >
              Contact
        </motion.button>
        </NavLink>
      {/* <NavLink to='/about'>About</NavLink> */}
    </nav>
  )
}

export default Nav