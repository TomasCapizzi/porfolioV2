import {AiFillGithub, AiOutlineLink} from 'react-icons/ai';
import React, {useContext, useEffect, useState} from 'react';

import {HiOutlineArrowLeft} from 'react-icons/hi'
import { LanguageContext } from '../context//LanguageContext';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import StackProject from '../components/Projects/StackProject';
import { projectsList } from '../projectsList';
import { useParams } from 'react-router';

//import useFetchProjectById from '../hooks/useFetchProjectById';


export default function ProjectDetail(){
    const {english} = useContext(LanguageContext)
    const{id} = useParams();
    const [project, setProject] = useState();
    const [handler, setHandler] = useState(false);
    //const {fetchProject} = useFetchProjectById()


    useEffect(()=>{
        //setProject(projectsList[parseInt(id)-1])
        //fetchProject(id, setProject, setHandler)
        if(projectsList.length > 0){
            console.log(projectsList.filter(item => item.id === parseInt(id)));
            setProject(projectsList.filter(item => item.id === parseInt(id)));
            setHandler(true);
        }
    }, [id]);

    return(
        <section className='detail-container'>
            <Link to='/'><HiOutlineArrowLeft className='backpage'/></Link>
            { handler ? 
                <>
                    <h1>{project[0].name}</h1>
                    <article className='detail'>
                        <div className='img-cont'>
                            <a href={project.route} target='_blank' rel="noreferrer">{project[0].gif ? <img src={project[0].gif} alt="project"/> : <img src={project[0].img} alt="project" />}</a>
                        </div>
                        <div className='detail-descrip'>
                            <p>{english? project[0].description : project[0].descripcion}</p>
                            <div>
                                {project[0].repo && <a href={project[0].repo} target='_blank' rel="noreferrer"><AiFillGithub id='github-icon'/></a>}
                                <a href={project[0].route} target='_blank' rel="noreferrer"><AiOutlineLink/></a>
                            </div>

                        </div>
                    </article>
                    <article className='stack-container'>
                        <h4>Project Stack</h4>
                        <StackProject project={project} />
                    </article>
                </> : <Spinner/> }

        </section>
    )
}