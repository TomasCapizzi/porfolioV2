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
        Complementing this knowledge with the career where i'm currently doing the last subjects, the degree on Digital Arts focused on Audiovisual.</p>
        : 
        <p><span>👋</span> Hola! Mi nombre es Tomás Capizi, soy productor digital y actualmente me encuentro enfocandome en el desarrollo frontend. Cuento con conocimientos en Javascript, Html, Css y React.
            Estos últimos meses decidí enfocar mi tiempo libre en aprender algo que me habia interesado bastante en su momento, dado que habia hecho algunos cursos básicos de maquetado.
            Me prepare para poder complementar estos conocimientos junto con la carrera que estoy estudiando y finalizando las últimas materias, la Licenciatura en Artes Digitales</p>
    }
  </div>
  )
}

export default PersonalInfo