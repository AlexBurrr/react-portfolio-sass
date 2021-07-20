import portImg1 from '../images/coolPic.jpg'
import Eurogif from '../images/Animated GIF-downsized_large.gif'
import NewsGif from '../images/news.gif'





const projects = [
    {
        id: 1,
        image: Eurogif,
        category: 'React',
        link: 'your mom',
        title: 'Euro 2021 Landing Page',
        techstack: 'react, styled-components',
        description: 'Using react and styled-components I created a landing page for the UEFA Euro 2021 futbol competition. ',
        githublink: 'https://github.com/AlexandroBerumen/soccer-react'
    },
    {
        id: 2,
        image: NewsGif,
        category: 'py',
        link: 'your dad',
        title: 'News Agreggator',
        techstack: 'react, styled-components, axios, New York Times API, react-router',
        description: 'I created a news aggregator website by creating reusable react components and filling in each card with data received from calling the New York Times API ',
        githublink: 'https://github.com/AlexandroBerumen/soccer-react'
    },

]

export default projects;