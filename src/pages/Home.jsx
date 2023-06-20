import Contact from '../components/Contact/Contact';
import Description from '../components/Description';
import PersonalInfo from '../components/PersonalInfo';
import PortfolioDescription from '../components/PortfolioDescription';
import Projects from '../components/Projects/Projects';
import React from 'react';
import Stack from '../components/Stack';

function Home() {  
  return (
    <section className='home'>
        <Description />
        <Stack/>
        <Projects/>
        <PersonalInfo/>
        <PortfolioDescription/>
        <Contact/>
    </section>
  )
}

export default Home