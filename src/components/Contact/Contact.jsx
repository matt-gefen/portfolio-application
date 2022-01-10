
import React from 'react'
import { motion } from 'framer-motion';

import styles from "./Contact.module.css";

import headshot from '../../assets/images/headshot2017.png'

const Contact = (props) => {
  return (
    <div className={styles.landing}>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>
  )
}

export default Contact
