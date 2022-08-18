import React from 'react'
import './style.css';
import Logo from '../../assets/img/Code typing-bro.png'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home" className="Home">
      <div className="content">
        <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, My name is <br /> <span style='color:#234899;'> Dedaldino Papelo </span> <br />Computer Engineer")
              .typeString("")
              .pauseFor(1000)
              .deleteChars(17)
              .typeString("Web Developer")
              .start();
          }}
        />
        </h1>
      </div>

      <div className='image'>
        <img src={Logo} alt="logo" />
      </div>

    </section>
  )
}

export default Home
