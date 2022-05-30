import Contact from '../components/Contact';
import Description from '../components/Description';
import PersonalInfo from '../components/PersonalInfo';
import Projects from '../components/Projects';
import React from 'react';
import Stack from '../components/Stack';

function Home() {
  return (
    <section className='home'>
        <Description />
        <Stack/>
        <Projects/>
        <PersonalInfo/>
        <Contact/>
    </section>
  )
}

export default Home