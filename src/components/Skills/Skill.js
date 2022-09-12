import React from 'react'
import './style.css'


const Skill = () => {
    return (
        <section id="skills" className='Skills container'>
             <h2 className='sub-title'>Skills</h2>
            <div className='stack'>
                <div className='box-stack'>
                  <h3>Languages</h3>
                  <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>C Language</li>
                        <li>C#.net</li>
                        <li>php</li>
                        <li>reactjs</li>
                        <li>nodejs</li>
                    </ul>  
                </div>

                 <div className='box-stack'>
                  <h3>databases</h3>
                  <ul>
                        <li>sql server</li>
                        <li>mysql</li>
                        <li>postgresql</li>
                        <li>mongodb</li>
                        <li>firebase</li>
                    </ul>  
                </div>  

                 <div className='box-stack'>
                  <h3>others</h3>
                  <ul>
                        <li>Computer Network</li>
                        <li>System Administration</li>
                        <li>It Technician</li>
                    </ul>  
                </div>    
            </div>
        </section>
    )
}

export default Skill
