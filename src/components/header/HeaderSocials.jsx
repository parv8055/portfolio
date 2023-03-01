import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'




const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/parv-choudhary-3188631b2/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/parv8055" target='_blank'><BsGithub /></a>
            <a href="mailto:choudharyparv4@gmail.com" target='_blank'><SiGmail /></a>
        </div>
    )
}

export default HeaderSocials