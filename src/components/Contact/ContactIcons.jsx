import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai';

import {IoMail} from 'react-icons/io5'
import React from 'react';

function ContactIcons() {
  return (
    <ul className='contact-icons'>
        <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
        <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
        <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank" rel="noreferrer"><IoMail/></a></li>
        <li><a href="https://wa.link/sssxh3" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a></li>
    </ul>
  )
}

export default ContactIcons