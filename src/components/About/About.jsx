import React from 'react'
import Modal from 'react-modal'

import '../../styles/Landing.css'

import headshot from '../../assets/images/headshot2017.png'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'

const About = (props) => {
  return (
    <div>
      <img id='headshot' src={headshot} alt="headshot" />
      <h1>Matt Gefen
        <br></br>
        Software Engineer
      </h1>
      <p><i>I am a Boulder based software engineer who loves hiking, reading, video games, and D&D! I'm passionate about full-stack software development and love building tools that address tangible organizational needs. </i></p>

      <h3>Skills</h3>
      <h4>Programming</h4>
 
      <h4>Frameworks</h4>
      <p></p>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/mattgefen/'>
          <img class='icon' src={linkedin} alt='linkedin-logo' />
        </a>
        <a href='https://github.com/matt-gefen'>
          <img class='icon' src={github} alt='github-logo'/>
        </a>
        <a class='link' href='mailto: matt.gefen@gmail.com'>
          <img class='icon' src={email} alt='email-logo'/>
        </a>
      </div>
    </div>
  )
}

export default About