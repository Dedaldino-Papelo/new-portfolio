import React from 'react'
import './style.css';

const Home = () => {

  return (
    <section id="home" className="container Home">
      <h1 className='introduction'>Hi <span role='img' aria-labelledby='imoji'>👋</span> , my name is</h1>

      <div className='name'>
        <h2>
          Dedaldino Papelo
          </h2>
          </div>

      <div className='title'>
        <h3>
          Computer Engineer and Software Developer
          </h3>
          </div>

      <div className='about-me'>
        <p>
        Iam an Enthusiastic about information technology and computer science, always driven by the desire to improve. NODEJS | REACTJS | C#.NET | SQL
        </p>
        </div>

        <div className='resume'>
          <a className='btn-download' href={process.env.PUBLIC_URL + "/meu curriculo EN.pdf"}>
          Download Resume 
          </a>
        </div>

    </section>
  )
}

export default Home
