import React, {useContext} from 'react';

import { LanguageContext } from './Languagecontext/LanguageContext';

function PersonalInfo() {
    const {english} = useContext(LanguageContext);
  return (
    <div className='personalInfo'>
    {
        english ? 
        <p><span>👋</span> Hi! Mi name is Tomas Capizzi, i'm a digital producer and currently i'm focusing on Front-End development, with knowledge's on Javascript, Html, CSS and React.

        This past year I decided to focus my free time on learning something that has been interesting me for a while, and I had taken a few courses a couple of years before, that is the web development
        </p>
        : 
        <p><span>👋</span> Hola! Mi nombre es Tomás Capizi, soy productor digital y actualmente me encuentro enfocandome en el desarrollo frontend. Cuento con conocimientos en Javascript, Html, Css y React.
            Este último año decidí enfocar mi tiempo libre en aprender algo que me habia interesado bastante en su momento, como lo es el desarrollo web.</p>
    }
  </div>
  )
}

export default PersonalInfo