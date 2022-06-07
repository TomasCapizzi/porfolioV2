import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaGitAlt, FaNodeJs, FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import {IoBrush, IoCodeSlashSharp, IoSettings} from 'react-icons/io5';
import {SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremiere, SiBulma, SiFirebase, SiJavascript, SiMongodb, SiRedux} from 'react-icons/si';

import React from 'react';

function Stack() {
  return (
    <article className='stack'>    
          <div className='list'>
            <span><IoCodeSlashSharp/></span>
            <ul>
              <li><AiFillHtml5/><p>Html</p></li>
              <li><FaCss3Alt/><p>Css</p></li>
              <li><FaSass/><p>Sass</p></li>
              <li><SiJavascript/><p>Javascript</p></li>
              <li><FaNodeJs/><p>Node Js</p></li>
              <li><FaReact/><p>React</p></li>
              <li><FaReact/><p>React Native</p></li>
            </ul>
          </div>
          <div className='list'>
            <span><IoSettings/></span>
            <ul>
              <li><SiFirebase/><p>Firebase</p></li>
              <li><SiMongodb/><p>Mongo DB</p></li>
              <li><FaGitAlt/><p>Git</p></li>
              <li><AiFillGithub/><p>Github</p></li>
              <li><SiRedux/><p>Redux</p></li>
            </ul>
          </div>
          <div className='list'>
            <span><IoBrush/></span>
            <ul>
              <li><SiAdobepremiere/><p>Premiere</p></li>
              <li><SiAdobeaftereffects/><p>After Effects</p></li>
              <li><SiAdobeillustrator/><p>Illustrator</p></li>
              <li><SiAdobephotoshop/><p>Photoshop</p></li>
            </ul>
          </div>
    </article>
  )
}

export default Stack