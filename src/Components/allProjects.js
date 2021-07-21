import portImg1 from '../images/coolPic.jpg'
import Eurogif from '../images/Animated GIF-downsized_large.gif'
import MovieGif from '../images/movie.gif'
import LeCloud from '../images/LeCloud.gif'
import Cryptos from '../images/crypto.gif'




const projects = [
    {
        id: 1,
        image: MovieGif,
        category: 'React',
        weblink: 'https://movie-and-tv.netlify.app',
        title: 'Movie and TV Info App',
        techstack: 'react, styled-components, axios, TMDB Api, react-router, react hooks',
        description: ' Using the TMDb api, this app displays popular movies and tv shows along with the cast and general information about the selected media. Can also search for a particular movie or show. ',
        githublink: 'https://github.com/AlexandroBerumen/movie-api-react'
    },
    {
        id: 2,
        image: Eurogif,
        category: 'React',
        weblink: 'https://euro2021.netlify.app',
        title: 'Euro 2021 Landing Page',
        techstack: 'react, styled-components',
        description: 'Using react and styled-components I created a landing page for the UEFA Euro 2021 futbol competition. ',
        githublink: 'https://github.com/AlexandroBerumen/soccer-react'
    },
    {
        id: 3,
        image: LeCloud,
        category: 'vanilla',
        weblink: 'https://leclouds.netlify.app',
        title: 'LeCloud',
        techstack: 'responsive design, vanilla css',
        description: 'Landing page for a fictional cloud hosting wesbite. This project was focused on writing clean css and making the website look good on different sized screens.',
        githublink: 'https://github.com/AlexandroBerumen/cloud-landing-page'
    },
    {
        id: 4,
        image: Cryptos,
        category: 'React',
        weblink: 'https://cryptocrypto.netlify.app',
        title: 'Crypto Tracker',
        techstack: 'react, styled-components, axios',
        description: 'simple app that tracks prices for popular crypto currencies',
        githublink: 'https://github.com/AlexandroBerumen/crypto-react'
    },


]

export default projects;