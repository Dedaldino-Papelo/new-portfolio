import React from 'react'
import './style.css';
import Logo from '../../assets/img/Code typing-bro.png'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home" className="Home">
      <div className="content">
        <Typewriter

          onInit={(typewriter) => {

            typewriter
              .typeString("<h1>Hi, My name is <br /> <span> Dedaldino Papelo </span><br />Computer Engineer</h1>")
              .pauseFor(1000)
              .deleteChars(17)
              .typeString("<h1> Web Developer</h1>")
              .start();
          }}
        />
      </div>

      <div className='image'>
        <img src={Logo} alt="logo" />
      </div>

    </section>
  )
}

export default Home
