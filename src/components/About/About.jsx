import React from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

import styles from "./About.module.css";

import headshot from '../../assets/images/avatar.svg'


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
    <div className='about'>
      <div 
        className={styles.headshotContainer}
        style={{backgroundImage: `url(${headshot})`}}
        ></div>
      <h1 className={styles.title}>Matt Gefen
        <br></br>
        Software Engineer
      </h1>
      <p className={styles.summary}><i>I am a Boulder based software engineer who loves hiking, reading, video games, and D&D! I'm passionate about Full Stack software development and love building tools that address tangible organizational needs. </i></p>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
      >
        Read More
      </motion.button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Skills Modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal> */}
      <h4 className={styles.subheading}>Programming Skills</h4>
        <div className={styles.skills}>
          <div className={styles.subskills}>
            <h5>Javascript</h5>
            <h5>Python</h5>
            <h5>React</h5>
            <h5>Node.js</h5>
          </div>
          <div className={styles.subskills}>
            <h5>Express.js</h5>
            <h5>Django.js</h5>
            <h5>SQL</h5>
            <h5>HTML/CSS</h5>
          </div>
        </div>
        <h4 className={styles.subheading}>Technical Tools</h4>
        <div className={styles.skills}>
          <div className={styles.subskills}>
            <h5>Snowflake</h5>
            <h5>dbt/dbt Cloud</h5>
            <h5>MongoDB</h5>
            <h5>PostgreSQL</h5>
          </div>
          <div className={styles.subskills}>
            <h5>Tableau</h5>
            <h5>AWS</h5>
            <h5>Fivetran</h5>
            <h5>Matillion</h5>
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

export default About