import { FaCss3Alt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import {SiJavascript, SiTypescript} from 'react-icons/si';

import { AiFillHtml5 } from 'react-icons/ai';
import {FiDatabase} from 'react-icons/fi'
import {IoCodeSlashSharp} from 'react-icons/io5';
import React from 'react';

function CodeStack() {
  return (
    <div className='list'>
        <span><IoCodeSlashSharp/></span>
        <ul>
            <li><AiFillHtml5/><p>Html</p></li>
            <li><FaCss3Alt/><p>Css</p></li>
            <li><FaSass/><p>Sass</p></li>
            <li><SiJavascript/><p>Javascript</p></li>
            <li><FaNodeJs/><p>Node Js</p></li>
            <li><FaReact/><p>React</p></li>
            <li><FiDatabase/><p>SQL</p></li>
            <li><SiTypescript/><p>Typescript</p></li>
        </ul>
  </div>
  )
}

export default CodeStack