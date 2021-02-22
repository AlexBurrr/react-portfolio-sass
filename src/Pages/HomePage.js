import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'




const HomePage = () => {
    return (
        <div className='HomePage'>
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
            <span>
                        Alexandro Berumen.
            </span>
                </h1>
                <p className='h-sub-text'>
                    Front end web developer please hire me
                </p>
                <div className="icons">
                    <Link className='icon-Container'>
                        <FontAwesomeIcon icon={faGithub} className='icon gh' />
                    </Link>
                    <Link className='icon-Container'>
                        <FontAwesomeIcon icon={faTwitter} className='icon tw' />
                    </Link>
                    <Link className='icon-Container'>
                        <FontAwesomeIcon icon={faFacebook} className="icon fa" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
