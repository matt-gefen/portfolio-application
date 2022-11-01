import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom'

import {ReactComponent as LinkedinLogo} from '../../assets/icons/linkedin-brands.svg'
import {ReactComponent as GithubLogo} from '../../assets/icons/github-square-brands.svg'
import {ReactComponent as EmailLogo} from '../../assets/icons/envelope-square-solid.svg'


const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <NavLink to='/'>        
          <button
            className='navlink name'
          >
              Matt Gefen
          </button>
          </NavLink>
          <div className='icons-landing'>
                        <a href='https://github.com/matt-gefen'
                            target="_blank"
                            rel="noopener noreferrer">
                                <div className='icon-landing'><GithubLogo /></div>
                        </a>
                        <a href='https://www.linkedin.com/in/mattgefen/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='icon-landing'><LinkedinLogo /></div>
                        </a>
                        <a href='mailto: matt.gefen@gmail.com'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='icon-landing'><EmailLogo /></div>                            
                        </a>
                </div>

          {/* |
          <NavLink to='/'>        
          <button
              className='navlink'
          >
              RadiantMoon
          </button>
        </NavLink> */}
      </div>
      <div></div>
      <div className='nav-right'>
        <a className='navlink' href="/#about" style={{textDecoration: "none"}}>About</a>
        {/* <div> | </div> */}
        <a className='navlink' href="/#experience" style={{textDecoration: "none"}}>Experience</a>
        {/* <div> | </div>  */}
        <a className='navlink' href="/#projects" style={{textDecoration: "none"}}>Projects</a>
      </div>
    </nav>
  )
}

export default Nav