import {React} from 'react'
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
                    <p className='section-content'>
                        Hi folks! I’m Matt Gefen and I love building things with code!
                    </p>
                    <p className='section-content'>
                        I started my career in the data analytics space, discovering a passion for development as I moved into analytics + data engineering.
                    </p>
                    <p className='section-content'>
                        After an incredible learning experience in <a className='par-link' target="_blank" href='https://generalassemb.ly/education/software-engineering-immersive-remote'>General Assembly’s Software Engineering Immersive</a> in late 2021, I fully jumped into Software Engineering. 
                    </p>
                    <p className='section-content'>
                        Now I work at <a className='par-link' target="_blank" href='https://roadtripnation.com/'>Roadtrip Nation</a> as a Full Stack Engineer working primarily in React!
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
                    <div className='skills-list-mobile'>
                        <ul className='skills-ul'>
                            <li className='skills-li'>Javascript</li>
                            <li className='skills-li'>React</li>
                            <li className='skills-li'>Express</li>
                            <li className='skills-li'>Node</li>
                            <li className='skills-li'>MongoDB</li>
                        </ul>
                        <ul className='skills-ul'>
                            <li className='skills-li'>Python</li>
                            <li className='skills-li'>Django</li>
                            <li className='skills-li'>Postgres</li>
                            <li className='skills-li'>C#</li>
                            <li className='skills-li'>Unity</li>
                        </ul>
                    </div>
                </div>
                <div className='headshot-container'>
                    <img className='headshot' src={headshot} alt="headshot" />
                    {/* <div className='icons-landing'>
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
                </div> */}
            </div>
            </div>
        </div>
    )
}

export default About