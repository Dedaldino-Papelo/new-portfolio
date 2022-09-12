import React from 'react'
import './style.css'
import projects from '../../Project'
import Card from './Card'

const Projects = () => {
    return (
        <section id="projects" className='container project'>
            <h2 className='sub-title'>Projects</h2>
            <div className='projects'>
                {projects.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
