import {React, useState} from 'react'

import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
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
    </div>
  )
}

export default Landing