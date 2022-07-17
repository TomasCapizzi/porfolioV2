import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import React,{useContext} from 'react';

import { LanguageContext } from '../context/LanguageContext';

export default function Description(){

    const {english} = useContext(LanguageContext);

    return(
        <article className='description' id='aboutme' >
            <img src="./img/115.jpg" alt="profile" />
            <article className='info'>
                <h1 id='about-me'>{english ? `Hi, I'm Tomas Capizzi !` : 'Hola, soy Tomás Capizzi'}</h1>
                <h2>FRONT END DEVELOPER</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
                    <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
                </ul>
            </article>
        </article>
    )
}