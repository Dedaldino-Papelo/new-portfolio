import yelp from './assets/img/yelpcamp.png'
import EventPlatform from './assets/img/EventPlatform.png'
import portfolio from './assets/img/portfolio.png'

const Projects = [
    {
        id: "1",
        name: "Yelpcamp",
        descrition: "Yelpcam camp é uma aplicação onde podes compartilhar e encontrar locais para acampamento",
        image: `${yelp}`,
        stacks: "Nodejs, EJS, Bootstrap",
        url: {
            github: "https://github.com/Dedaldino-Papelo/yelcamp",
            live: "https://blooming-savannah-36956.herokuapp.com/"
        }
    },

    {
        id: "2",
        name: "Event Platform",
        descrition: "Plataforma para compartilhamento de videos, cursos e etc.",
        image: `${EventPlatform}`,
        stacks: "React, TailwindCss, GraphQL, GraphCMS",
        url: {
            github: "https://github.com/Dedaldino-Papelo/ignite-lab-event-platform",
            live: "https://ignite-lab-event-platform-five-xi.vercel.app/"
        }
    },
    {
        id: "3",
        name: "Portfolio",
        descrition: "Este é um Portfolio pessoal desenvolvido por mim",
        image: `${portfolio}`,
        stacks: "Reactjs, CSS, Emailjs",
        url: {
            github: "https://github.com/Dedaldino-Papelo/new-portfolio",
            live: "https://ignite-lab-event-platform-five-xi.vercel.app/"
        }
    }

]

export default Projects