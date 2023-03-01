import React from 'react'
import './Contact.css'
import { SiGmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className="contact__option">
                        <SiGmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>Choudharyparv4@gmail.com</h5>
                        <a href="mailto:Choudharyparv4@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91-9660233819</h5>
                        <a href='https://api.whatsapp.com/send?phone=9660233819'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiFillLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Parv choudhary</h5>
                        <a href='https://www.linkedin.com/in/parv-choudhary-3188631b2/'>Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Contact