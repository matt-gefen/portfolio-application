import {React, useState} from 'react'

import About from './About/About';
import Experience from './Experience/Experience';
import Projects from '../Projects/Projects';
// import {ReactComponent as LinkedinLogo} from '../../assets/icons/linkedin-brands.svg'
// import {ReactComponent as GithubLogo} from '../../assets/icons/github-square-brands.svg'
// import {ReactComponent as EmailLogo} from '../../assets/icons/envelope-square-solid.svg'

// import { motion } from 'framer-motion';

const Landing = (props) => {

  const [isSkillsOpen, setSkillsOpen] = useState(false)
  const [isToolsOpen, setToolsOpen] = useState(false)

  return (
    <div className='landing'>
      <div className='landing-header-section'>
        <div className='landing-title-section'>
          <h1 className='title'>
            Matt Gefen
            <br></br>
          </h1>
          <h2 className='subtitle'>
            Software Engineer
          </h2>
          <div className='landing-bio-section'>
            <p className='bio'>
              Full-Stack Software Engineer based in Boulder, Colorado with a passion for learning and problem solving.
            </p>
            <p className='bio'>
                I'm currently working at <a className='par-link' target="_blank" href='https://roadtripnation.com/'>Roadtrip Nation</a> to build accessible, educational web-based experiences 
                for students looking for career guidance.
            </p>
            <p className='bio'>
              Talk to me about hiking, books, video games, and D&D.
            </p>
          </div>
      </div>

      </div>
      <About />
      <Experience />
      <Projects />
      {/* <div className='buttonContainer'>
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
        </motion.div> */}
        {/* <div className='buttonContainer'>
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
          </motion.div> */}
        {/* </motion.div> */}
        {/* <a 
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
      </a> */}
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