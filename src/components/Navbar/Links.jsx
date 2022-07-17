import {FaHome} from 'react-icons/fa'
import React from 'react'

function Links({english}) {
  return (
    <ul>
        <a href='/' rel="noreferrer"><li><FaHome/></li></a>
        <a href="/#info-title" rel="noreferrer"><li>{english ? 'About Me' : '¿Quién Soy?'}</li></a>
        <a href="/#projects" rel="noreferrer"><li>{english ? 'Projects' : 'Proyectos'}</li></a>
        <a href="/#contact" rel="noreferrer"><li>{english ? 'Contact' : 'Contacto'}</li></a>
    </ul>
  )
}

export default Links