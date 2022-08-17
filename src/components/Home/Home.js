import React from 'react'
import './style.css';
import Logo from '../../assets/img/Code typing-bro.png'

const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1>
            Hi, My name is <br /> <span> Dedaldino Papelo </span><br/>
            Web Developer
        </h1>
      </div>

      <div className='image'>
        <img src={Logo} alt="logo" />
      </div>

    </section>
  )
}

export default Home
