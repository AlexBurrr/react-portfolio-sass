import React from 'react'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

// import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsSection = () => {
    return (
        <div className='skillsSection'>
            <div className="skillsContainer">
                <h4 className="xp-title">
                    Technology I've worked with
                <div className="tech-icon-container">
                        <FontAwesomeIcon icon={faCss3Alt} className='icon css3' />
                        <FontAwesomeIcon icon={faHtml5} className='icon html5' />
                        <FontAwesomeIcon icon={faJs} className='icon js' />
                        <FontAwesomeIcon icon={faReact} className='icon react' />
                        <FontAwesomeIcon icon={faSass} className='icon sass' />
                        <FontAwesomeIcon icon={faNodeJs} className='icon nodeJs' />

                    </div>
                </h4>
            </div>
        </div>

    )
}

export default SkillsSection
