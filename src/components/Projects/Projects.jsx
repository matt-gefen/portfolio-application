import React from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

import styles from "./Projects.module.css";

import poemverse from '../../assets/images/tree_background.svg'
import junction from '../../assets/images/junctionlogo.svg'
import birb from '../../assets/images/crow-solid.svg'
import magic from '../../assets/images/particles.gif'


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

const Projects = (props) => {

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
    <div className={styles.projects}>
      <div 
        className={styles.projectContainer} id={styles.junction}
        style={{backgroundColor: '#3873cb'}}>
          {/* <div className={styles.logoContainer}>
            <img className = {styles.logoImage} src={junction} alt='junctionLogo'/>
          </div> */}
          <div className={styles.projectLogo}>Junction</div>
      </div>
      <div 
        className={styles.projectContainer} id={styles.poem}
        style={{backgroundImage: `url(${poemverse})`}}
      >
        <div className={styles.projectLogo}>Poemverse</div>
      </div>
      <div 
        className={styles.projectContainer} id={styles.birb}
        style={{backgroundColor: '#f1b7a5'}}
      >
          {/* <div className={styles.logoContainer} id={styles.birbImage}>
            <img className = {styles.logoImage} src={birb} alt='junctionLogo'/>
          </div> */}
          <div className={styles.projectLogo}>BirbWatcher</div>
      </div>
      <div 
        className={styles.projectContainer} id={styles.magictourney}
        style={{backgroundImage: `url(${magic})`}}
      >
        <div className={styles.projectLogo}>Magic Tourney</div>
      </div>
    </div>
  )
}

export default Projects