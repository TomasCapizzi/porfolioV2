import React,{useContext, useEffect, useState} from 'react';

import {AiFillPlusCircle} from 'react-icons/ai'
import {FaMinusCircle} from 'react-icons/fa'
import { LanguageContext } from '../../context/LanguageContext';
import Project from './Project';
import Spinner from '../Spinner';
import useFetchProjects from '../../hooks/useFetchProjects';

export default function Projects(){
    //const [projectsHandler, setProjectsHandler] = useState(false);
    const [parameter, setParameter] = useState(3);
    const {english} = useContext(LanguageContext);

    const {projects, getProyects} = useFetchProjects();
    function showMoreProducts(){
        setParameter(parameter + 3);      
    }
    function showLessProducts(){
        setParameter(3)
    }
    useEffect(()=>{
        getProyects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div className='projects'>
            <h3 id='projects'>{english ? 'Projects' : 'Proyectos'}</h3>
                <div className='projects-container'>
                    <article className='container-parent'>
                        {
                            projects ? 
                            <div className='container'>
                            {
                                projects.map(
                                    item => <Project item={item} parameter={parameter} key={item.id} />
                                )
                            }
                        </div> : <Spinner/>
                        }

                    </article>
                    { projects ?                    
                        parameter <= projects.length ? 
                            <div className='btnProj'>
                                <AiFillPlusCircle onClick={showMoreProducts} className='btnProj'/>
                                <p>{english ? 'See more' : 'Mostrar más'}</p>
                            </div>
                        :   <div className='btnProj'>
                                <a href="#projects"><FaMinusCircle onClick={showLessProducts}/></a>
                                <p>{english ? 'Show less' : 'Mostrar menos'}</p>
                            </div> 
                    : null
                    }
                </div>
        </div>
    )
}