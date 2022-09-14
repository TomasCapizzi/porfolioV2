import {AiFillGithub, AiOutlineLink} from 'react-icons/ai';
import React, {useContext, useEffect, useState} from 'react';

import {HiOutlineArrowLeft} from 'react-icons/hi'
import { LanguageContext } from '../context//LanguageContext';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import useFetchProjectById from '../hooks/useFetchProjectById';
import { useParams } from 'react-router';

export default function ProjectDetail(){
    const {english} = useContext(LanguageContext)
    const{id} = useParams();
    const [project, setProject] = useState();
    const [handler, setHandler] = useState(false);
    const {fetchProject} = useFetchProjectById()


    useEffect(()=>{
        //setProject(projectsList[parseInt(id)-1])
        fetchProject(id, setProject, setHandler)
        /*if(projectsList.length > 0){
            setProject(projectsList.filter(item => item.id === parseInt(id)));
            setHandler(true);
        }*/
    }, [id]);

    return(
        <section className='detail-container'>
            <Link to='/'><HiOutlineArrowLeft className='backpage'/></Link>
            { handler ? 
                <>
                    <h1>{project.name}</h1>
                    <article>
                        <div className='img-cont'>
                            <a href={project.route} target='_blank' rel="noreferrer">{project.gif ? <img src={project.gif} alt="project"/> : <img src={project.img} alt="project" />}</a>
                        </div>
                        <div className='detail-descrip'>
                            <p>{english? project.description : project.descripcion}</p>
                            <div>
                                {project.repo && <a href={project.repo} target='_blank' rel="noreferrer"><AiFillGithub id='github-icon'/></a>}
                                <a href={project.route} target='_blank' rel="noreferrer"><AiOutlineLink/></a>
                            </div>

                        </div>
                    </article>
                </> : <Spinner/> }

        </section>
    )
}