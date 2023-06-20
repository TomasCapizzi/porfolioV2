import React,{useContext} from 'react';

import {AiFillGithub} from 'react-icons/ai';
import { LanguageContext } from '../context/LanguageContext';
import PortfolioDevBackend from './PortfolioDevBackend';
import PortfolioDevFrontend from './PortfolioDevFrontend';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function PortfolioDescription() {
    const {english} = useContext(LanguageContext);
    const {isIntersecting, elementRef} = useIntersectionObserver({rootMargin: '-50px'})
  return (
    <article className='portfolio-desc'>
        <p>{english ? 'This portfolio was developed with:' : 'Este portfolio fue desarrollado con:' }</p>
        <ul className='portfolio-stack'>
            <PortfolioDevBackend/>
            <PortfolioDevFrontend/>
        </ul>
        <a href='https://github.com/TomasCapizzi/porfolioV2' target='_blank' rel='noreferrer' className={isIntersecting?'portfolio-git in': 'portfolio-git out'} ref={elementRef}>{english ? 'Portfolio repository' : 'Repositorio del Portfolio'}<AiFillGithub/></a>
    </article>
  )
}

export default PortfolioDescription