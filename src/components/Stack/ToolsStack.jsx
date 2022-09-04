import {FaAws, FaGitAlt} from 'react-icons/fa';
import {SiFirebase, SiMongodb, SiMysql, SiRedux} from 'react-icons/si';

import {AiFillGithub} from 'react-icons/ai';
import {IoSettings} from 'react-icons/io5';
import React from 'react';

function ToolsStack() {
  return (
    <div className='list'>
        <span><IoSettings/></span>
        <ul>
            <li><SiFirebase/><p>Firebase</p></li>
            <li><SiMongodb/><p>Mongo DB</p></li>
            <li><FaGitAlt/><p>Git</p></li>
            <li><SiMysql/><p>MySQL</p></li>
            <li><AiFillGithub/><p>Github</p></li>
            <li><SiRedux/><p>Redux</p></li>
            <li><FaAws/><p>AWS</p></li>
        </ul>
  </div>
  )
}

export default ToolsStack