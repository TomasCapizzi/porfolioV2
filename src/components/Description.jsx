import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import React,{useContext} from 'react';
import {SiJavascript, SiTypescript} from 'react-icons/si';

import { LanguageContext } from '../context/LanguageContext';
import { MdFileDownload } from "react-icons/md";

export default function Description(){

    const {english} = useContext(LanguageContext);

    return(
        <article className='description' id='about-me' >
            <img src="./img/115.jpg" alt="profile" />
            <article className='info'>
                <h1>{english ? `Hi, I'm Tomas Capizzi !` : 'Hola, soy Tomás Capizzi'}</h1>
                <h2>FRONT END DEVELOPER</h2>
                <ul>
                    <li><FaReact/></li>
                    <li><SiJavascript/></li>
                    <li><FaSass/></li>
                    <li><SiTypescript/></li>
                    <li><FaNodeJs/></li>
                </ul>
                <div className='description-btns'>
                    <button className='btn-contact'>Contact</button>
                    <button className='btn-cv'>CV <MdFileDownload /></button>
                </div>
            </article>
            <ul className='social'>
                    <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" rel="noreferrer" alt="Linkedin Tomas Capizzi"><AiFillLinkedin/></a></li>
                    <li><a href="https://github.com/TomasCapizzi" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
                    <li><a href="/Capizzi_Tomas.pdf" target="_blank" rel="noreferrer"><MdFileDownload /></a></li>
                </ul>
        </article>
    )
}