import React,{useContext} from 'react';

import ContactIcons from './ContactIcons';
import { LanguageContext } from '../../context/LanguageContext';

export default function Contact(){
    const {english} = useContext(LanguageContext)
    return (
        <div className='contact'>
            <h3 id='contact'>{english  ? 'Contact' : 'Contacto'}</h3>
            {english ? <p>If my profile adjusts to what you're looking for, or some of my projects are of your interest, i'm open to feedback and profesional proposals. ¡Don't doubt on contacting me!</p>
            : <p>Si mi perfil se ajusta a lo que estas buscando, o algunos de mis proyectos son de tu interés, no dudes en contactarte conmigo o darme feedback acerca de lo que te parecio.</p>
            }
            <ContactIcons/>
        </div>
    )
}