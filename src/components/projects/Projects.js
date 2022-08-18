import React from 'react'
import './style.css'
import projects from '../../Project'
import Card from './Card'

const Projects = () => {
    return (
        <section id="projects" className='project'>
            <div className='projects'>
                {projects.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
