import React from 'react'
import './style.css'
import Html from '../../assets/html5.svg'
import Css from '../../assets/icons8-css3.svg'
import Javascript from '../../assets/icons8-javascript.svg'
import Reactjs from '../../assets/React.svg'
import Node from '../../assets/icons8-nodejs.svg'
import Mysql from '../../assets/icons8-logo-mysql.svg'
import Git from '../../assets/icons8-git.svg'
import PostqreSql from '../../assets/icons8-postgreesql.svg'

const Skill = () => {
    return (
        <section className='skills'>
            <div className='stack'>
                <div className='wrapper'>
                <div className='stack-icon'>
                    <img src={Html} alt='' />
                    <strong>HTML</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Css} alt='' />
                    <strong>CSS</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Javascript} alt='' />
                    <strong>Js</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Css} alt='' />
                    <strong>CSS</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Javascript} alt='' />
                    <strong>Js</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Reactjs} alt='' />
                    <strong>React</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Node} alt='' />
                    <strong>Node</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Mysql} alt='' />
                    <strong>Mysql</strong>
                </div>

                <div className='stack-icon'>
                    <img src={Git} alt='' />
                    <strong>Git</strong>
                </div>

                <div className='stack-icon'>
                    <img src={PostqreSql} alt='' />
                    <strong>PostqreSql</strong>
                </div>

                </div>
                
            </div>

            <div className='subtitle'>
                <h2>Skills</h2>
            </div>
        </section>
    )
}

export default Skill
