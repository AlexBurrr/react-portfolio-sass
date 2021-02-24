import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/imageSection'
import SkillsSection from '../Components/SkillsSection'


const About = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title span={'Technologies'} />
            <SkillsSection />
        </div>
    )
}

export default About
