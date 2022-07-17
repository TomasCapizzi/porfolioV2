import React,{useContext, useEffect, useState} from 'react';

import {AiFillPlusCircle} from 'react-icons/ai'
import {FaMinusCircle} from 'react-icons/fa'
import { LanguageContext } from '../../context/LanguageContext';
import Project from './Project';
import Spinner from '../Spinner';
import { projectsList } from '../../projectsList';

export default function Projects({projectsAPI}){

    //const [apiHandler, setApiHandler] = useState(false);
    const [parameter, setParameter] = useState(3);
    const {english} = useContext(LanguageContext);


    function showMoreProducts(){
        setParameter(parameter + 3);      
    }
    function showLessProducts(){
        setParameter(3)
    }

    useEffect(()=>{
        //projectsAPI.length > 0 && setApiHandler(true);
    },[parameter])


    return (
        <div className='projects'>
            <h3 id='projects'>{english ? 'Projects' : 'Proyectos'}</h3>
            {
                projectsList ? 
                <div className='projects-container'>
                    <svg className='svg-first' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#404040" fillOpacity="1" d="M0,128L720,192L1440,192L1440,320L720,320L0,320Z"></path></svg>
                    <article className='container-parent'>
                        <div className='container'>
                            {
                                projectsList.map(
                                    item => <Project item={item} parameter={parameter} key={item.id} />
                                )
                            }
                        </div>
                    </article>
                    {parameter <= projectsList.length ? 
                        <div className='btnProj'>
                            <AiFillPlusCircle onClick={showMoreProducts} className='btnProj'/>
                            <p>{english ? 'See more' : 'Mostrar más'}</p>
                        </div>
                    :   <div className='btnProj'>
                            <a href="#projects"><FaMinusCircle onClick={showLessProducts}/></a>
                            <p>{english ? 'Show less' : 'Mostrar menos'}</p>
                        </div> 
                        }
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#404040" fillOpacity="1" d="M0,128L720,192L1440,192L1440,0L720,0L0,0Z"></path></svg>
                </div>
                :
                <Spinner/>
            }
        </div>
    )
}