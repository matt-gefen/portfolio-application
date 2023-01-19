import React from 'react'

import {ReactComponent as LinkOut} from '../../../assets/icons/square-arrow-up-right-solid.svg';
import {ReactComponent as GhLogo} from '../../../assets/icons/github-square-brands.svg';


const ProjectCard = ({title, text, liveurl, ghurl}) => {
    return (
    <div className="project-card">
        <div className='project-card-header'>
            <div className='project-title'><a className='par-link' target="_blank" rel='noreferrer' href={liveurl}>{title}</a></div>
        </div>
        <div className='project-card-body'>
            <div className='project-card-text'>{text}</div>
        </div>
        <div className='project-card-footer'>
            <a
                href={liveurl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div
                    className="linkout"
                >
                    <LinkOut />
                </div>
            </a>
            <a
                href={ghurl}
                target="_blank"
                rel="noopener noreferrer"
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