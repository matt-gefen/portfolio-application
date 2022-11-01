import React, {useState, useEffect} from 'react'

import { map } from 'lodash';

// import ProjectCard from '../ProjectCard/ProjectCard';
import PrimaryTab from '../Experience/PrimaryTab'
import ProjectCard from './ProjectCard';


const Projects = (props) => {
  const projects = require('./data/projects.json')
  // const [tabs, setSelectedTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState(projects.projects[selectedTab]);
  // const [selectedSubTab, setSelectedSubTab] = useState(0);

  const setPrimaryTab = (index) => {
      setSelectedTab(index);
      // setSelectedSubTab(0);
  }

  const tabs = map(projects.projects, (element, index) => {
      return <PrimaryTab
                  title={element.title}
                  index={index}
                  setSelectedTab={setPrimaryTab}
                  selectedTab={selectedTab}
                  // section={'projects-tab'}
                  />
                  
  })

  const cards = map(projects.projects, (element, index) => {
    return <ProjectCard
                title={element.title}
                text={element.text}
                liveurl={element.liveurl}
                ghurl={element.ghurl}
                // section={'projects-tab'}
                />
                
})

  useEffect(() => { 
    setSelectedInfo(projects.projects[selectedTab]);  
},[selectedTab, projects]);

  return (
    <div className="projects" id="projects">
      <div className='projects-title'>Projects</div>
      <div className='projects-main-section'>
        {/* <div className='primary-tabs projects-primary-tabs'> */}
        {/* <div className='primary-tabs'>
          {tabs}
        </div> */}
        <div className='project-content'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Projects