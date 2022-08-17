import React from 'react'
import './style.css'

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
    </div>

    <div className='subtitle'>
        <h2>Contact</h2>   
    </div>
</section>
  )
}

export default Contact
