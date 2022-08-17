import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className='contact'>
    <div className='form'>
        <form>
            <input type='text' placeholder="Name" />
            <input type='text' placeholder="Surname" />
            <textarea placeholder='Message'></textarea>
            <button>Enviar</button>
        </form>
        <div className='social-links'>
          <a href='https://www.facebook.com/dedaldino.papelo'><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
          <a href='https://www.linkedin.com/in/dedaldino-papelo'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
          <a href='https://github.com/Dedaldino-Papelo'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
          <a href='https://wa.me/939736657'><FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
        </div>
    </div>

    <div className='subtitle'>
        <h2>Contact</h2>   
    </div>
</section>
  )
}

export default Contact
