import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const submitHandler = (e) => {
    setLoading(true)
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID, form.current,
      process.env.REACT_APP_API_KEY)
      .then((result) => {
        alert("Message Enviada com sucesso")
        setLoading(false)
      }, (error) => {
        alert(error.text)
      });

  }

  return (
    <section id="contact" className='container contact'>
      <h2 className='sub-title'>Get in touch</h2>
      <div className='form'>
        <form ref={form} onSubmit={submitHandler}>
          <input type='text'
            placeholder="Name"
            name='Nome'
            required
          />
          <input type='text'
            placeholder="Your Email"
            name='Email'
            required
          />

          <textarea
            placeholder='Message'
            name='Message'
            required
          />

          <button>{loading ? 'Loading...': 'Enviar'}</button>
        </form>
        <div className='social-links'>
          <a href='https://www.facebook.com/dedaldino.papelo'><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
          <a href='https://www.linkedin.com/in/dedaldino-papelo'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
          <a href='https://github.com/Dedaldino-Papelo'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
          <a href='https://wa.me/939736657'><FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
