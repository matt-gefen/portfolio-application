import {React, useState} from 'react'
import { motion } from 'framer-motion';


import headshot from '../../../assets/images/matt-beach.jpg'
import {ReactComponent as LinkedinLogo} from '../../../assets/icons/linkedin-brands.svg'
import {ReactComponent as GithubLogo} from '../../../assets/icons/github-square-brands.svg'
import {ReactComponent as EmailLogo} from '../../../assets/icons/envelope-square-solid.svg'

import jslogo from '../../../assets/icons/javascript.svg'
import pythonlogo from '../../../assets/icons/python-vertical.svg'
import reactlogo from '../../../assets/icons/react.svg'
import nodelogo from '../../../assets/icons/nodejs.svg'
import djangologo from '../../../assets/icons/django.svg'
import expresslogo from '../../../assets/icons/expressjs.svg'
import htmllogo from '../../../assets/icons/html5.svg'
import csslogo from '../../../assets/icons/css3.svg'

import postgreslogo from '../../../assets/icons/postgresql.svg'
import snowflakelogo from '../../../assets/icons/snowflake.svg'
import dbtlogo from '../../../assets/icons/dbt-logo.svg'
import awslogo from '../../../assets/icons/amazon-web-services.svg'
import tableaulogo from '../../../assets/icons/tableau-logo.svg'
import mongodblogo from '../../../assets/icons/mongodb.svg'
import matillionlogo from '../../../assets/icons/matillion.svg'
import fivetranlogo from '../../../assets/icons/fivetran-ar21.svg'

const About = (props) => {
    return (
        <div className='about' id='about'>
            <div className='section-header'>
                About Me
            </div>
            <div className='about-main-section'>
                <div className='about-main-content'>
                    <div className='section-subheader'>
                        Bio
                    </div>
                    <p className='section-content'>
                        Hi folks! I’m Matt Gefen and I love building things with code!
                    </p>
                    <p className='section-content'>
                        I started my career in the data analytics space, discovering a passion for development as I moved into analytics + data engineering.
                    </p>
                    <p className='section-content'>
                    After an incredible learning experience in General Assembly’s Software Engineering Immersive in late 2021, I fully jumped into Software Engineering. 
                    </p>
                    <div className='section-subheader'>
                        Skills + Technologies
                    </div>
                    <div className='skills-list'>
                        <ul className='skills-ul'>
                            <li className='skills-li'>Javascript</li>
                            <li className='skills-li'>React</li>
                            <li className='skills-li'>Express</li>
                        </ul>
                        <ul className='skills-ul'>
                            <li className='skills-li'>Python</li>
                            <li className='skills-li'>Django</li>
                            <li className='skills-li'>Postgres</li>
                        </ul>
                        <ul className='skills-ul'>
                            <li className='skills-li'>Node</li>
                            <li className='skills-li'>MongoDB</li>
                        </ul>
                        <ul className='skills-ul'>
                            <li className='skills-li'>C#</li>
                            <li className='skills-li'>Unity</li>
                        </ul>
                    </div>
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