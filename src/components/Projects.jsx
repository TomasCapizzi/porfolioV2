import React,{useContext, useEffect, useState} from 'react';

import {AiFillPlusCircle} from 'react-icons/ai'
import {FaMinusCircle} from 'react-icons/fa'
import { LanguageContext } from './Languagecontext/LanguageContext';
import Project from './Project';
import Spinner from './Spinner';
import { projectsList } from '../projectsList';

export default function Projects({projectsAPI}){

    //const [apiHandler, setApiHandler] = useState(false);
    const {english} = useContext(LanguageContext);




    return (
        <div className='projects'>
            <h3 id='projects'>{english ? 'Projects' : 'Proyectos'}</h3>
            {
                projectsList ? 
                <div className='projects-container'>
                    <svg className='svg-first' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#404040" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                    <article className='container-parent'>
                        <div className='container'>
                        </div>
                    </article>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#404040" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                </div>
                :
                <Spinner/>
            }
        </div>
    )
}