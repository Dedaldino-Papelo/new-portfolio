import React from 'react'
import './style.css'
import about from '../../assets/about-photo.jpeg'

const About = () => {
    return (
        <section id='about' className='About container'>
            <div className='about-content'>
                <div className='info'>
                <h2 className='sub-title'>About</h2>
                    <p>I am Dedaldino Papelo, enthusiast in the area about software development and engineering, where I have developed my skills for more than 3+ years with the construction of web applications using technologies such as HTML, CSS, JAVASCRIPT, I am interested in working and collaborating both in Frontend and Backend areas and I always try to keep up to date with Tech market trends, always reading and learning new technologies and libraries such as React, Nodejs, I also have a great interest in Databases where I have expertise in relational databases and not relational like MongoDB</p>
                </div>

                <div className='left-image'>
                    <img src={about} alt='about' />
                </div>
            </div>
        </section>
    )
}

export default About
