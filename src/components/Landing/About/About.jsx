import {React, useState} from 'react'
import { motion } from 'framer-motion';


import headshot from '../../../assets/images/matt-beach.jpg'
import {ReactComponent as LinkedinLogo} from '../../../assets/icons/linkedin-brands.svg'
import {ReactComponent as GithubLogo} from '../../../assets/icons/github-square-brands.svg'
import {ReactComponent as EmailLogo} from '../../../assets/icons/envelope-square-solid.svg'

const About = (props) => {
    return (
        <div className='about' id='about'>
            <div className='section-header'>
                About Me
            </div>
            <div className='about-main-section'>
                <div className='about-main-content'>
                    Test content
                </div>
                <div className='headshot-container'>
                    <img className='headshot' src={headshot} alt="headshot" />
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
            </div>
            </div>
        </div>
    )
}

export default About