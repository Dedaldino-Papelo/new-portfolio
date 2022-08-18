import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const form = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, form.current, 
      process.env.REACT_APP_API_KEY)
    .then((result) => {
        alert("Message Enviada com sucesso")
    }, (error) => {
        console.log(error.text);
    });

  }

  return (
    <section id="contact" className='contact'>
    <div className='form'>
        <form ref={form} onSubmit={submitHandler}>
            <input type='text' 
              placeholder="Name" 
              name='Nome'
              required
              />
            <input type='text' 
              placeholder="Email"                
             name='Email'
             required
             />

            <textarea   
            placeholder='Message'
            name='Message' 
            required
            />

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
