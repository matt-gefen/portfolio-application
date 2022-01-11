import React, { useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

import styles from "./ProjectCard.module.css";


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

const ProjectCard = (props) => {

  const [textDisplay, setTextDisplay] = useState(false)

  const handleHover = () => {
    setTextDisplay(!textDisplay)
    console.log('handling hover')
  }

  return (
    <div 
        className={styles.projectContainer}
        id={styles[props.id]}
        style={{
          background: props.background,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleHover}
        >
          <div id={styles.linkcontainer}>
          { !textDisplay &&
            <div className={styles.projectLogo}>  
              {props.title}
            </div>
          }
          { textDisplay &&
            <div className={styles.projectText}>
            <div id={styles[props.id]}>  
              {props.text}
            </div>
            <a
              href={props.url}
              id={styles.link}
              target="_blank"
              rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.visitapp}>
                  Visit App
              </motion.button>
            </a>
            </div>
          }
          </div>
      </div>
  )
}

export default ProjectCard