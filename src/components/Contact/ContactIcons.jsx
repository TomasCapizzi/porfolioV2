import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai';

import {IoMail} from 'react-icons/io5'
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function ContactIcons() {
  const {isIntersecting, elementRef} = useIntersectionObserver({threshold:0.5})
  return (
    <ul className={isIntersecting ? 'contact-icons on':'contact-icons off'} ref={elementRef}>
        <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
        <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
        <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank" rel="noreferrer"><IoMail/></a></li>
        <li><a href="https://wa.link/sssxh3" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a></li>
    </ul>
  )
}

export default ContactIcons