
import React from 'react'
import { motion } from 'framer-motion';

import styles from "./Contact.module.css";

import avatar from '../../assets/images/avatar.svg'
// import headshot from '../../assets/images/i-peaks.jpeg'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'

const Contact = (props) => {
  return (
    <div className={styles.contact}>
      <div 
        className={styles.headshotContainer}
        style={{backgroundImage: `url(${avatar})`}}>
      </div>
      <p>
        Feel free to reach out! I'd love to hear from you!
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <div className={styles.form}>
        <div className={styles.leftform}>
          <label>Name:</label>   
          <label>Email: </label>
          <label>Message: </label>
        </div>

        <div className={styles.rightform}>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </div>
        </div>
        <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            style={{padding: "4px"}}
            type="submit"
            className={styles.submit}>
              Submit
          </motion.button>
      </form>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/mattgefen/'
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}>
              <img className={styles.icon} src={linkedin} alt='linkedin-logo' />
          </motion.button>
        </a>
        <a href='https://github.com/matt-gefen'
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <img className={styles.icon} src={github} alt='github-logo'/>
          </motion.button>
        </a>
        <a class='link' href='mailto: matt.gefen@gmail.com'
          target="_blank"
          rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{backgroundColor: "transparent", border: "none"}}>
            <img className={styles.icon} src={email} alt='email-logo'/>
        </motion.button>
        </a>
      </div>
    </div>
  )
}

export default Contact
