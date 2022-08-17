import React from 'react'

const Card = ({ project }) => {
  return (
    <div className='grid'>
        <img src={project.image} alt={project.image} />
        <div className='grid-body'>
            <h5>{project.name}</h5>
            <p>{project.descrition}</p>
            <span>{project.stacks}</span>
            <div className='url'>
            <a className='Btn' href={project.url.github}>Github</a>
            <a className='Btn' href={project.url.live}>Site</a>
            </div>
        </div>
    </div>
  )
}

export default Card
