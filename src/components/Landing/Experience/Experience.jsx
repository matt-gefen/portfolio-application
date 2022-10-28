import {React, useState} from 'react'
import PrimaryTab from './PrimaryTab'
import SubTab from './SubTab';

import { map } from 'lodash';

const Experience = (props) => {
    const experience = require('./data/experience.json')
    // const [tabs, setSelectedTab] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = map(experience.tabs, (element, index) => {
        return <PrimaryTab title={element.tabName} index={index} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
    })
    console.log(tabs)

    return (
        <div className='experience' id='experience'>
            <div className='section-header'>
                Experience
            </div>
            <div className='experience-main-section'>
                <div className='primary-tabs'>
                    {tabs}
                </div>
                <div>
                    {experience.tabs[selectedTab].subtabs[0].title}
                </div>

            </div>
        </div>
    )
}

export default Experience