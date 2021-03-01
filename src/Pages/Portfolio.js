import React from 'react'
import allProjects from '../Components/allProjects'
import Title from '../Components/Title'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems';
import { useState } from 'react';



const allCatergories = ['All', ...new Set(allProjects.map(item => item.category))];


const Portfolio = () => {

    const [categories, setCategories] = useState(allCatergories);
    const [menuItems, setMenuItems] = useState(allProjects);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(allProjects)
            return;
        }
        const filteredData = allProjects.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData)
    }



    return (
        <div className='PortfolioPage'>
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolio-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default Portfolio
