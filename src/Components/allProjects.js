import portImg1 from '../images/coolPic.jpg'
import Eurogif from '../images/Animated GIF-downsized_large.gif'
import NewsGif from '../images/news.gif'





const projects = [
    {
        id: 1,
        image: NewsGif,
        category: 'React',
        weblink: 'https://google.com',
        title: 'Movie and TV Info App',
        techstack: 'react, styled-components, axios, TMDB Api, react-router, react hooks',
        description: 'App that displays popular movies and tv shows along with the cast and general information about the selected media. Can also search for a particular movie or show. ',
        githublink: 'https://github.com/AlexandroBerumen/movie-api-react'
    },
    {
        id: 2,
        image: Eurogif,
        category: 'React',
        weblink: 'https://google.com',
        title: 'Euro 2021 Landing Page',
        techstack: 'react, styled-components',
        description: 'Using react and styled-components I created a landing page for the UEFA Euro 2021 futbol competition. ',
        githublink: 'https://github.com/AlexandroBerumen/soccer-react'
    },
    {
        id: 3,
        image: Eurogif,
        category: 'vanilla',
        weblink: 'https://google.com',
        title: 'LeCloud',
        techstack: 'bootstrap, vanilla js',
        description: 'Landing page for a fictional cloud hosting wesbite ',
        githublink: 'https://github.com/AlexandroBerumen/cloud-landing-page'
    },
    {
        id: 4,
        image: Eurogif,
        category: 'React',
        weblink: 'https://google.com',
        title: 'Crypto Tracker',
        techstack: 'react, styled-components, axios',
        description: 'simple app that tracks prices for popular crypto currencies',
        githublink: 'https://github.com/AlexandroBerumen/crypto-react'
    },


]

export default projects;