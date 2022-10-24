import {React, useState} from 'react'
import { motion } from 'framer-motion';

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

const variants = {
  open: { opacity: 1, x: 0, height: '100%' },
  closed: { opacity: 0, x: "-100%", height: '-100%'},
}

const container = {
  hidden: { opacity: 0, display: "none"},
  show: {
    opacity: 1,
    display: "flex",
    transition: {
      staggerChildren: 0.7,
      staggerDirection: 1
    }
  }
}

const item = {
  hidden: { opacity: 0},
  show: { opacity: 1 }
}

const Landing = (props) => {

  const [isSkillsOpen, setSkillsOpen] = useState(false)
  const [isToolsOpen, setToolsOpen] = useState(false)

  return (
    <div className='landing'>
      <div 
        className='headshotContainer'>
          <img className='headshot' src={headshot} alt="headshot" />
      </div>
      <h1 className='title'>Matt Gefen
        <br></br>
        Software Engineer
      </h1>
      <p className='bio'><i>Full-Stack Software Developer based in Boulder, Colorado! I bring a passion for learning and problem solving to every project I collaborate on. Talk to me about hiking, books, video games, and D&D.</i></p>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/mattgefen/'
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{backgroundColor: "transparent", border: "none"}}>
              <img className='icon' src={linkedin} alt='linkedin-logo' />
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
            <img className='icon' src={github} alt='github-logo'/>
          </motion.button>
        </a>
        <a class='link' href='mailto: matt.gefen@gmail.com'
          target="_blank"
          rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{backgroundColor: "transparent", border: "none"}}>
            <img className='icon' src={email} alt='email-logo'/>
        </motion.button>
        </a>
      </div>
      <div className='buttonContainer'>
        <motion.button
          onClick={() => setSkillsOpen(isSkillsOpen => !isSkillsOpen)} 
          className='subheading'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}>
            <h4>Programming Skills</h4>
        </motion.button>
        </div>
        <motion.div 
          className='skills'
          animate={isSkillsOpen ? "show" : "hidden"}
          variants={container}>
          <motion.div 
            initial='hidden'
            animate={isSkillsOpen ? "show" : "hidden"}
            variants={container}
            className='subskills'>
            <div><img className = 'logoskill' src={jslogo} alt='javascript' /></div>
            <div><img className = 'logoskill'src={djangologo} alt='python' /></div>
            <div><img className = 'logoskill' src={reactlogo} alt='react' /></div>
            <div><img className = 'logoskill' src={nodelogo} alt='node.js' /></div>
          </motion.div>
          <motion.div 
            initial='hidden'
            animate={isSkillsOpen ? "show" : "hidden"}
            variants={container}
            className='subskills'>
            <div variants={item}><img className = 'logoskill' src={pythonlogo} alt='python' /></div>
            <div variants={item}><img className = 'logoskill' src={expresslogo} alt='python' /></div>
            <div variants={item}><img className = 'logoskill' src={csslogo} alt='react' /></div>
            <div variants={item}><img className = 'logoskill' src={htmllogo} alt='node.js' /></div>
          </motion.div>
        </motion.div>
        <div className='buttonContainer'>
          <motion.button 
          onClick={() => setToolsOpen(isToolsOpen => !isToolsOpen)} 
          className='subheading'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}>
            <h4>Technical Tools</h4>
          </motion.button>
        </div>
        <motion.div 
          className='skills'
          animate={isToolsOpen ? "show" : "hidden"}
          variants={container}>
          <motion.div 
            initial='hidden'
            animate={isToolsOpen ? "show" : "hidden"}
            variants={container}
            className='subskills'>
            <div><img className ='logoskill' src={mongodblogo} alt='mongo' /></div>
            <div><img className ='logoskill' src={dbtlogo} alt='dbt' /></div>
            <div><img className ='logoskill' src={tableaulogo} alt='tableay' /></div>
            <div><img className ='logoskill' src={fivetranlogo} alt='fivetran' /></div>
          </motion.div>
          <motion.div 
            initial='hidden'
            animate={isToolsOpen ? "show" : "hidden"}
            variants={container}
            className='subskills'>
            <div variants={item}><img className ='logoskill' src={postgreslogo} alt='postgres' /></div>
            <div variants={item}><img className ='logoskill' src={snowflakelogo} alt='snowflake' /></div>
            <div variants={item}><img className ='logoskill'src={awslogo} alt='aws' /></div>
            <div variants={item}><img className ='logoskill'src={matillionlogo} alt='matillion' /></div>
          </motion.div>
        </motion.div>
        <a 
        className='link' 
        href='https://drive.google.com/file/d/18DaunWXR8ICa8IBcy9Lqxy5efylAP4b3/view?usp=sharing'
        target="_blank"
        rel="noopener noreferrer">
          <div className='buttonContainer'>
          <motion.button
            className='subheading'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
          <h4>Resume</h4>
        </motion.button>
        </div>
      </a>
{/*      
      <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      // style={{height:"40px"}}
    >
CONTENT BABY
    </motion.div> */}
    </div>
  )
}

export default Landing