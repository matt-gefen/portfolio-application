import {React, useState, useEffect} from 'react'
import PrimaryTab from './PrimaryTab'
import SubTab from './SubTab';

import { map } from 'lodash';
import {ReactComponent as SquareArrow} from '../../../assets/icons/square-arrow-up-right-solid.svg'

const Experience = (props) => {
    const experience = require('./data/experience.json')
    // const [tabs, setSelectedTab] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedSubTab, setSelectedSubTab] = useState(0);
    const [selectedInfo, setSelectedInfo] = useState(experience.tabs[selectedTab].subtabs[selectedSubTab]);

    const setPrimaryTab = (index) => {
        setSelectedTab(index);
        setSelectedSubTab(0);
    }

    const tabs = map(experience.tabs, (element, index) => {
        return <PrimaryTab
                    title={element.tabName}
                    index={index}
                    setSelectedTab={setPrimaryTab}
                    selectedTab={selectedTab}/>
    })
    
    const subtabs = map(experience.tabs[selectedTab].subtabs, (element, index) => {
        // console.log(element.tab)
        console.log(element)
        return <SubTab
                    title={element.title}
                    index={index}
                    setSelectedSubTab={setSelectedSubTab}
                    selectedSubTab={selectedSubTab}/>
    })

    useEffect(() => { 
        console.log(selectedTab)
        console.log(selectedSubTab)
        setSelectedInfo(experience.tabs[selectedTab].subtabs[selectedSubTab]);  
    },[selectedSubTab, selectedTab, experience]);

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
                    <div className='experience-header'>
                        <div className='experience-title'>{selectedInfo.title}</div>
                    </div>
                    <div className='experience-subheader'>
                        <a className='experience-subtitle' target='blank' href={selectedInfo.link}>
                            {selectedInfo.subtitle}
                        </a>
                        <div className='experience-time'>{selectedInfo.time}</div>
                    </div>
                    <div className='experience-bullets'>
                        {selectedInfo.bullets &&
                            selectedInfo.bullets.map((element) => {
                                return <div className='experience-bullet'>{element}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience