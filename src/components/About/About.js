import React from 'react'
import './style.css'
import Profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <section id='about' className='About container'>
            <h2 className='sub-title'>About</h2>
            <div className='about-content'>
                <div className='info'>
                    <p>I am Dedaldino Papelo, enthusiast in the area about software development and engineering, where I have developed my skills for more than 3+ years with the construction of web applications using technologies such as HTML, CSS, JAVASCRIPT, I am interested in working and collaborating both in Frontend and Backend areas and I always try to keep up to date with Tech market trends, always reading and learning new technologies and libraries such as React, Nodejs, I also have a great interest in Databases where I have expertise in relational databases and not relational like MongoDB</p>
                </div>

                <div className='left-image'>
                    <img src={Profile} alt='about' />
                </div>
            </div>
        </section>
    )
}

export default About
