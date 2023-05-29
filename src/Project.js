import yelp from './assets/img/yelpcamp.png'
import EventPlatform from './assets/img/EventPlatform.png'
import portfolio from './assets/img/portfolio.png'
import Bikecraft from './assets/img/Bikecraft.png'
import Robofriends from './assets/img/robofriends.png'
import Themovies from './assets/img/The-movies.png'
import Weather from './assets/img/Weather.png'


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
        name: "Bikecraft",
        descrition: "Esta é uma simulação de um site de vendas de bicicletas personalizadas",
        image: `${Bikecraft}`,
        stacks: "Html, Css, javascript",
        url: {
            github: "https://github.com/Dedaldino-Papelo/bikecraft",
            live: "https://stormy-gorge-20152.herokuapp.com/"
        }
    },
    {
        id: "4",
        name: "Robofriens",
        descrition: "Aplicação cujo o objetivo foi consumir uma API que nos retorna-se uma lista de Robos e adicionalmente uma entrade de pesquisa",
        image: `${Robofriends}`,
        stacks: "React, Bootstrap",
        url: {
            github: "https://github.com/Dedaldino-Papelo/Robofriends",
            live: "https://dedaldino-papelo.github.io/Robofriends/"
        }
    },
    {
        id: "5",
        name: "The Movies",
        descrition: "site de filmes onde você pode encontrar informações sobre filmes, pesquisar qualquer filme que queiras ou gostes",
        image: `${Themovies}`,
        stacks: "React, Css, API",
        url: {
            github: "https://github.com/Dedaldino-Papelo/movie-app",
            live: "https://movie-app-nine-murex.vercel.app/"
        }
    },
    {
        id: "6",
        name: "Weather App",
        descrition: "App para previsão de tempo, contém uma caixa de texto onde podes inserir o nome da cidade que desejas obter informação sobre o tempo",
        image: `${Weather}`,
        stacks: "React, Styled Components, axios",
        url: {
            github: "https://github.com/Dedaldino-Papelo/weather-app",
            live: "https://dedaldino-papelo.github.io/weather-app/"
        }
    }

]

export default Projects