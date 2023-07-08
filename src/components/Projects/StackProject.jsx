import {SiAmazonaws, SiBulma, SiCssmodules, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiRedux, SiSass, SiTypescript} from 'react-icons/si'

import {BiLock} from 'react-icons/bi'
import {FaDatabase} from 'react-icons/fa6'
import {GrStackOverflow} from 'react-icons/gr'
import {ImMobile} from 'react-icons/im'
import {IoSettings} from 'react-icons/io5';
import React from 'react';

function StackProject({project}) {
  const stack = project[0].tech
  return (
    <ul className='tech-list'>
        {stack.typescript && <li><SiTypescript/>Typescript</li>}
        {stack.react && <li><SiReact/>React JS</li>}
        {stack.node && <li><SiNodedotjs/>Node JS</li>}
        {stack.mern && <li><GrStackOverflow/>MERN Project</li>}
        {stack.aws && <li><SiAmazonaws/>AWS Deploy</li>}
        {stack.api && <li><IoSettings/>API Rest</li>}
        {stack.mongoDB && <li><SiMongodb/>MongoDB</li>}
        {stack.sql && <li><SiMysql/>SQL</li>}
        {stack.sass && <li><SiSass/>Sass</li>}
        {stack.cssMod && <li><SiCssmodules/>Css Modules</li>}
        {stack.customHook && <li><SiReact/>Custom Hooks</li>}
        {stack.auth && <li><BiLock/>Auth</li>}
        {stack.firebase && <li><SiFirebase/>Firebase</li>}
        {stack.responsive && <li><ImMobile/>Responsive</li>}
        {stack.redux && <li><SiRedux/>Redux</li>}
        {stack.ls && <li><FaDatabase/>Local Storage</li>}
        {stack.jsVanilla && <li><SiJavascript/>JS Vanilla</li>}
        {stack.bulma && <li><SiBulma/>Bulma</li>}
    </ul>
  )
}

export default StackProject