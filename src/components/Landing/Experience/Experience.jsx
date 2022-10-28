import {React, useState, useEffect} from 'react'
import PrimaryTab from './PrimaryTab'
import SubTab from './SubTab';

import { map } from 'lodash';

const Experience = (props) => {
    const experience = require('./data/experience.json')
    // const [tabs, setSelectedTab] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedSubTab, setSelectedSubTab] = useState(0);
    const [selectedInfo, setSelectedInfo] = useState(experience.tabs[selectedTab].subtabs[selectedSubTab]);

    const tabs = map(experience.tabs, (element, index) => {
        return <PrimaryTab
                    title={element.tabName}
                    index={index}
                    setSelectedTab={setSelectedTab}
                    selectedTab={selectedTab}/>
    })
    
    const subtabs = map(experience.tabs[selectedTab].subtabs, (element, index) => {
        console.log(element.tab)
        return <SubTab
                    title={element.title}
                    index={index}
                    setSelectedSubTab={setSelectedSubTab}
                    selectedSubTab={selectedSubTab}/>
    })

    useEffect(() => { 
        setSelectedInfo(experience.tabs[selectedTab].subtabs[selectedSubTab]);  
    },[selectedSubTab, selectedTab]);

    return (
        <div className='experience' id='experience'>
            <div className='section-header'>
                Experience
            </div>
            <div className='experience-main-section'>
                <div className='primary-tabs'>
                    {tabs}
                </div>
                <div className='sub-tabs'>
                    {subtabs}
                </div>
                <div className='experience-content'>
                    <div className='experience-title'>{selectedInfo.title}</div>
                    <div className='experience-subtitle'>{selectedInfo.subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default Experience