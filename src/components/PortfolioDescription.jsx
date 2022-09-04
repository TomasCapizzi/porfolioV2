import React,{useContext} from 'react';

import {AiFillGithub} from 'react-icons/ai';
import { LanguageContext } from '../context/LanguageContext';
import {RiComputerLine} from 'react-icons/ri';
import {VscServerProcess} from 'react-icons/vsc';

function PortfolioDescription() {
    const {english} = useContext(LanguageContext);
  return (
    <article className='portfolio-desc'>
        <p>{english ? 'This portfolio was developed with:' : 'Este portfolio fue desarrollado con:' }</p>
        <ul className='portfolio-stack'>
            <li className='backend'>
                <div>
                    <VscServerProcess/>
                    <p>Backend:</p>
                </div>
                <ul>
                    <li>SQL</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                </ul>
            </li>
            <li className='frontend'>
                <div>
                    <RiComputerLine/>
                    <p>Frontend:</p>
                </div>
                <ul>
                    <li>
                        <p>React</p>
                        <ul className='react-stack'>
                            <li>Custom Hooks</li>
                            <li>React Router</li>
                            <li>Context</li>
                        </ul>
                    </li>
                    <li>Sass</li>

                </ul>
            </li>
        </ul>
        <a href='https://github.com/TomasCapizzi/porfolioV2' target='_blank' rel='noreferrer' className='portfolio-git'>{english ? 'Portfolio repository' : 'Repositorio del Portfolio'}<AiFillGithub/></a>
    </article>
  )
}

export default PortfolioDescription