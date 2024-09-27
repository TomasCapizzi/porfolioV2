import React,{useContext} from 'react';

import ContactIcons from './ContactIcons';
import { LanguageContext } from '../../context/LanguageContext';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Contact(){
    const {english} = useContext(LanguageContext)
    const {isIntersecting, elementRef} = useIntersectionObserver({threshold:0.4})

    return (
        <div className={isIntersecting? 'contact on':'contact off'} ref={elementRef}>
            <h3 id='contact'>{english  ? 'Contact' : 'Contacto'}</h3>
            {english ? <p>If you're looking for a frontend developer passionate about creating modern, efficient, and detail-oriented web interfaces, I'm here to help! I have experience in HTML, CSS, JavaScript, React, and other key frontend technologies, and I'm always looking for new challenges to improve my skills and bring value to every project. 
            If you have any questions, collaboration proposals, or just want to know more about my experience, don't hesitate to get in touch. I'd be happy to chat with you and explore how I can contribute to your projects.</p>
            : <p>Si estás buscando un desarrollador frontend apasionado por crear interfaces web modernas, eficientes y con gran atención al detalle, ¡estoy aquí para ayudarte! Tengo experiencia en HTML, CSS, JavaScript, React y otras tecnologías clave del frontend, y siempre estoy en busca de nuevos retos para mejorar mis habilidades y aportar valor a cada proyecto.

            Si tienes alguna pregunta, propuesta de colaboración o simplemente quieres saber más sobre mi experiencia, no dudes en ponerte en contacto conmigo. Estaré encantado de conversar contigo y explorar cómo puedo contribuir a tus proyectos.</p>
            }
            <ContactIcons/>
        </div>
    )
}