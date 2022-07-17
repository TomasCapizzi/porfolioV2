import {AiFillGithub, AiOutlineLink} from 'react-icons/ai';
import React, {useContext, useEffect, useState} from 'react';

import {HiOutlineArrowLeft} from 'react-icons/hi'
import { LanguageContext } from '../context//LanguageContext';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import {projectsList} from '../projectsList';
import { useParams } from 'react-router';

export default function ProjectDetail(){
    const {english} = useContext(LanguageContext)
    const{id} = useParams();
    const [project, setProject] = useState();
    const [handler, setHandler] = useState(false);


    useEffect(()=>{
        //setProject(projectsList[parseInt(id)-1])
        if(projectsList.length > 0){
            setProject(projectsList.filter(item => item.id === parseInt(id)));
            setHandler(true);
        }
    }, [id]);

    return(
        <section className='detail-container'>
            <Link to='/'><HiOutlineArrowLeft className='backpage'/></Link>
            { handler ? <>
                <h1>{project[0].name}</h1>
            <article>
                <div className='img-cont'>
                    <a href={project[0].route} target='_blank' rel="noreferrer">{project[0].gif ? <img src={project[0].gif} alt="project"/> : <img src={project[0].img} alt="project" />}</a>
                </div>
                <div className='detail-descrip'>
                    <p>{english? project[0].description : project[0].descripcion}</p>
                    <div>
                        {project[0].repo && <a href={project[0].repo} target='_blank' rel="noreferrer"><AiFillGithub id='github-icon'/></a>}
                        <a href={project[0].route} target='_blank' rel="noreferrer"><AiOutlineLink/></a>
                    </div>

                </div>
            </article>
            </> : <Spinner/>  }

        </section>
    )
}