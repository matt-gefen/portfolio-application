import React from 'react'

import {ReactComponent as LinkOut} from '../../../assets/icons/square-arrow-up-right-solid.svg';
import {ReactComponent as GhLogo} from '../../../assets/icons/github-square-brands.svg';


const ProjectCard = ({title, text, liveurl, ghurl}) => {
    return (
    <div className="project-card">
        <div className='project-card-header'>
            <div className='project-title'>{title}</div>
        </div>
        <div className='project-card-body'>
            <div className='project-card-text'>{text}</div>
        </div>
        <div className='project-card-footer'>
            <a
                href={liveurl}
            >
                <div
                    className="linkout"
                >
                    <LinkOut />
                </div>
            </a>
            <a
                href={ghurl}
            >
                <div
                    className="linkout"
                >
                    <GhLogo />
                </div>
            </a>
        </div>

    </div>
)}

export default ProjectCard