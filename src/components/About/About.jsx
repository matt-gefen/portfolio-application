import React from 'react'
import Modal from 'react-modal'

import '../../styles/About.css'

import headshot from '../../assets/images/headshot2017.png'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import github from '../../assets/icons/github-square-brands.svg'
import email from '../../assets/icons/envelope-square-solid.svg'


const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
  },
};

const About = (props) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img id='headshot' src={headshot} alt="headshot" />
      <h1>Matt Gefen
        <br></br>
        Software Engineer
      </h1>
      <p><i>I am a Boulder based software engineer who loves hiking, reading, video games, and D&D! I'm passionate about full-stack software development and love building tools that address tangible organizational needs. </i></p>
      <button onClick={openModal}>Read More</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Skills Modal"
      >
        <button onClick={closeModal}>close</button>
        <h4>Programming Skills</h4>
        <div className='skills'>
          <div className='subskills'>
            <h5>Javascript</h5>
            <h5>Python</h5>
            <h5>React</h5>
            <h5>Node.js</h5>
          </div>
          <div className='subskills'>
            <h5>Express.js</h5>
            <h5>Django.js</h5>
            <h5>SQL</h5>
            <h5>HTML/CSS</h5>
          </div>
        </div>
        <h4>Technical Tools</h4>
        <div className='skills'>
          <div className='subskills'>
            <h5>Snowflake</h5>
            <h5>dbt/dbt Cloud</h5>
            <h5>MongoDB</h5>
            <h5>PostgreSQL</h5>
          </div>
          <div className='subskills'>
            <h5>Tableau</h5>
            <h5>AWS</h5>
            <h5>Fivetran</h5>
            <h5>Matillion</h5>
          </div>
        </div>
      </Modal>

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