import {SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript} from 'react-icons/si'

import React from 'react'

function StackPreview({item}) {
    const stack = item.tech
  return (
    <ul className='tech-preview'>
        {stack.typescript && <li><SiTypescript/><p>Typescript</p></li>}
        {stack.react && <li><SiReact/><p>React JS</p></li>}
        {stack.node && <li><SiNodedotjs/><p>Node JS</p></li>}
        {stack.mongoDB && <li><SiMongodb/><p>Mongo DB</p></li>}
        {stack.tailwind && <li><SiTailwindcss/><p>Tailwind Css</p></li>}
        {stack.jsVanilla && <li><SiJavascript/><p>JS Vanilla</p></li>}
    </ul>
  )
}

export default StackPreview