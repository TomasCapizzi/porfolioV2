import React,{useContext} from 'react';
import {IoMail} from 'react-icons/io5'
import {AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { LanguageContext } from './Languagecontext/LanguageContext';

export default function Contact(){

    const {english} = useContext(LanguageContext)


    return (
        <div className='contact'>
            <h3 id='contact'>{english  ? 'Contact' : 'Contacto'}</h3>
            {english ? <p>If my profile adjusts to what you´re looking for, or some of my projects are of your interest, i´m open to feedback and profesional proposals. ¡Don't doubt on contacting me!</p>
            : <p>Si mi perfil se ajusta a lo que estas buscando, o algunos de mis proyectos son de tu interés, no dudes en contactarte conmigo o darme feedback acerca de lo que te parecio.</p>

            }
            <ul className='contact-icons'>
                <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
                <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
                <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank" rel="noreferrer"><IoMail/></a></li>
                <li><a href="https://wa.link/sssxh3" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a></li>
            </ul>
        </div>
    )
}