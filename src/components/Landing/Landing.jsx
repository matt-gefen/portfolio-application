import React from 'react'
import { motion } from 'framer-motion';

import styles from "./Landing.module.css";

import headshot from '../../assets/images/matt-beach.jpg'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'

import jslogo from '../../assets/icons/javascript.svg'
import pythonlogo from '../../assets/icons/python-vertical.svg'
import reactlogo from '../../assets/icons/react.svg'
import nodelogo from '../../assets/icons/nodejs.svg'
import djangologo from '../../assets/icons/django.svg'
import expresslogo from '../../assets/icons/expressjs.svg'
import htmllogo from '../../assets/icons/html5.svg'
import csslogo from '../../assets/icons/css3.svg'

import postgreslogo from '../../assets/icons/postgresql.svg'
import snowflakelogo from '../../assets/icons/snowflake.svg'
import dbtlogo from '../../assets/icons/dbt-logo.svg'
import awslogo from '../../assets/icons/amazon-web-services.svg'
import tableaulogo from '../../assets/icons/tableau-logo.svg'
import mongodblogo from '../../assets/icons/mongodb.svg'
import matillionlogo from '../../assets/icons/matillion.svg'
import fivetranlogo from '../../assets/icons/fivetran-ar21.svg'

const Landing = (props) => {
  return (
    <div className={styles.landing}>
      <div 
        className={styles.headshotContainer}
        style={{backgroundImage: `url(${headshot})`}}>
      </div>
      <h1 className={styles.title}>Matt Gefen
        <br></br>
        Software Engineer
      </h1>
      <p className={styles.bio}><i>Full-Stack Software Developer based in Boulder, Colorado! I bring a passion for learning and problem solving to every project I collaborate on. Talk to me about hiking, reading, video games, and D&D.</i></p>
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
      <h4 className={styles.subheading}>Programming Skills</h4>
        <div className={styles.skills}>
          <div className={styles.subskills}>
          <div><img className = {styles.logoskill} src={jslogo} alt='javascript' /></div>
          <div><img className = {styles.logoskill} src={djangologo} alt='python' /></div>
          <div><img className = {styles.logoskill} src={reactlogo} alt='react' /></div>
          <div><img className = {styles.logoskill} src={nodelogo} alt='node.js' /></div>
          </div>
          <div className={styles.subskills}>
            <div><img className = {styles.logoskill} src={pythonlogo} alt='python' /></div>
            <div><img className = {styles.logoskill} src={expresslogo} alt='python' /></div>
            <div><img className = {styles.logoskill} src={csslogo} alt='react' /></div>
            <div><img className = {styles.logoskill} src={htmllogo} alt='node.js' /></div>
          </div>
\
        </div>
        <h4 className={styles.subheading}>Technical Tools</h4>
        <div className={styles.skills}>
        <div className={styles.subskills}>
          <div><img className = {styles.logoskill} src={mongodblogo} alt='javascript' /></div>
          <div><img className = {styles.logoskill} src={dbtlogo} alt='python' /></div>
          <div><img className = {styles.logoskill} src={tableaulogo} alt='react' /></div>
          <div><img className = {styles.logoskill} src={fivetranlogo} alt='node.js' /></div>
          </div>
          <div className={styles.subskills}>
            <div><img className = {styles.logoskill} src={postgreslogo} alt='python' /></div>
            <div><img className = {styles.logoskill} src={snowflakelogo} alt='python' /></div>
            <div><img className = {styles.logoskill} src={awslogo} alt='react' /></div>
            <div><img className = {styles.logoskill} src={matillionlogo} alt='node.js' /></div>
          </div>
        </div>

        <a 
        className={styles.link} 
        href='https://drive.google.com/file/d/1bgmu_M3bELyKMF5upDRMToTq44Qn9GJI/view?usp=sharing'
        target="_blank"
        rel="noopener noreferrer">
          <motion.button
            className={styles.link} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
          View Resume
        </motion.button>
      </a>
    </div>
  )
}

export default Landing