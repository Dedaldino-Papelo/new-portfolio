import React from 'react'

const Card = ({ project }) => {
  return (
    <div className='grid'>
        <img src={project.image} alt={project.image} />
        <div className='body'>
            <h5>{project.name}</h5>
            <p>{project.descrition}</p>
            <span>{project.stacks}</span>
            <div className='url'>
              <a className='' href={project.url.github}>Github</a>
              <a className='live' href={project.url.live}>See Live</a>
            </div>
        </div>
    </div>
  )
}

export default Card
