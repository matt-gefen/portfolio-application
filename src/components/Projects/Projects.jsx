import React from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

import styles from "./Projects.module.css";

import poemverse from '../../assets/images/tree_background.svg'
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
        text='Full Stack Community Builder built in the MERN Stack'
        url='https://community-junction.herokuapp.com/'
      />
      <ProjectCard 
        background= {`url(${poemverse})`}
        title='Poemverse'
        id='poem'
        text='Full Stack Poetry Anthology Builder built in Django'
        url='https://poemverse.herokuapp.com/'
      />
      <ProjectCard 
        background= '#f1b7a5'
        title='BirbWatcher'
        id='birb'
        text='Full Stack Bird Watching Log built in Node + Express'
        url='https://birb-watcher.herokuapp.com/'
      />
      <ProjectCard 
        background= {`url(${magic})`}
        title='Magic Tourney'
        id='magictourney'
        text='Front End Turn-Based Battle Game built in Javascript'
        url='https://magic-tourney.netlify.app/'
      />
    </div>
  )
}

export default Projects