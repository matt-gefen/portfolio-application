import React from 'react'
import { motion } from 'framer-motion';

import styles from "./Landing.module.css";

import headshot from '../../assets/images/headshot2017.png'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'

const Landing = (props) => {
  return (
    <div className={styles.landing}>
      <div 
        className='headshot-container' 
        style={{backgroundImage: `url(${headshot})`}}>
      </div>
      <h1>Matt Gefen</h1>
      <p><i>Full-Stack Software Developer based in Boulder, Colorado! I bring a passion for learning and problem solving to every project I collaborate on.</i></p>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/mattgefen/'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}>
              <img class='icon' src={linkedin} alt='linkedin-logo' />
          </motion.button>
        </a>
        <a href='https://github.com/matt-gefen'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <img class='icon' src={github} alt='github-logo'/>
          </motion.button>
        </a>
        <a class='link' href='mailto: matt.gefen@gmail.com'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{backgroundColor: "transparent", border: "none"}}>
            <img class='icon' src={email} alt='email-logo'/>
        </motion.button>
        </a>
      </div>
    </div>
  )
}

export default Landing