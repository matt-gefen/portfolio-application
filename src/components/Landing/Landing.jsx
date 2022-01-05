import React from 'react'

import '../../styles/Landing.css'

import headshot from '../../assets/images/headshot2017.png'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'

const Landing = (props) => {
  return (
    <div>
      <img id='headshot' src={headshot} alt="headshot" />
      <h1>Matt Gefen</h1>
      <p><i>Full-Stack Software Developer based in Boulder, Colorado! I bring a passion for learning and problem solving to every project I collaborate on.</i></p>
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

export default Landing