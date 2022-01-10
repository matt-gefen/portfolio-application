import React from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

import styles from "./Projects.module.css";

import poemverse from '../../assets/images/tree_background.svg'
import junction from '../../assets/images/junctionlogo.svg'
import birb from '../../assets/images/crow-solid.svg'
import magic from '../../assets/images/particles.gif'

import ProjectCard from '../ProjectCard/ProjectCard';


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

      <ProjectCard 
        background='#3873cb'
        title='Junction'
        id='junction'
      />
      <ProjectCard 
        background= {`url(${poemverse})`}
        title='Poemverse'
        id='poem'
      />
      <ProjectCard 
        background= '#f1b7a5'
        title='BirbWatcher'
        id='birb'
      />
      <ProjectCard 
        background= {`url(${magic})`}
        title='Magic Tourney'
        id='magictourney'
      />
    </div>
  )
}

export default Projects