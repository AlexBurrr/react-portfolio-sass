import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MenuItems = ({ menuItem }) => {
    return (
        <div className='projects'>
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">

                            <img src={item.image} alt="" onClick={(e) => (window.location = `${item.weblink}`)} />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}></a>
                                    <a href={item.link2}></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <FontAwesomeIcon icon={faGithub} className='icon' onClick={(e) => (window.location = `${item.githublink}`)} style />
                        <span>{item.techstack}</span>
                        <p>{item.description}</p>

                    </div>
                })
            }
        </div>
    )
}


export default MenuItems
