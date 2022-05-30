import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaGitAlt, FaNodeJs, FaReact, FaSass, FaWordpress} from 'react-icons/fa';
import {SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremiere, SiBulma, SiFirebase, SiJavascript, SiMongodb, SiRedux} from 'react-icons/si';

import React from 'react';

function Stack() {
  return (
    <div className='stack'>
        <h3 id='stack'>Stack</h3>      
        <div className='items'>
          <ul>
            <li><AiFillHtml5/><span>Html</span></li>
            <li><FaCss3Alt/><span>Css</span></li>
            <li><FaSass/><span>Sass</span></li>
          </ul>

          <ul>
            <li><SiJavascript/><span>Javascript</span></li>
            <li><FaNodeJs/><span>Node Js</span></li>
            <li><FaReact/><span>React</span></li>
            <li><FaReact/><span>React Native</span></li>
            <li><SiRedux/><span>Redux</span></li>
          </ul>

          <ul>
            <li><SiFirebase/><span>Firebase</span></li>
            <li><SiMongodb/><span>Mongo DB</span></li>
          </ul>

          <ul>
            <li><FaGitAlt/><span>Git</span></li>
            <li><AiFillGithub/><span>Github</span></li>
          </ul>

          <ul>
            <li><SiAdobepremiere/><span>Premiere</span></li>
            <li><SiAdobeaftereffects/><span>After Effects</span></li>
            <li><SiAdobeillustrator/><span>Illustrator</span></li>
            <li><SiAdobephotoshop/><span>Photoshop</span></li>
          </ul>

          <ul>
            <li><FaWordpress/><span>Wordpress</span></li>
          </ul>
        </div>
    </div>
  )
}

export default Stack