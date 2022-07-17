import React,{useContext} from 'react';

import {FaHome} from 'react-icons/fa';
import {HiMenuAlt3} from 'react-icons/hi';
import Language from './Language';
import { LanguageContext } from '../../context/LanguageContext';
import Links from './Links';

function NavHamburguer({dropMenu}) {
    const {english,setSpanishLanguage, setEnglishLanguage} = useContext(LanguageContext)
  return (
    <nav className='menu-hamb'>
        <div className='nav-container'>
            <a href='/' rel="noreferrer"><FaHome/></a>
            <button onClick={dropMenu}><HiMenuAlt3/></button>
            <div className='hamb-links' id='menu-hamb'>
                <Links english={english} />
                <Language english={english} setEnglishLanguage={setEnglishLanguage} setSpanishLanguage={setSpanishLanguage}/>
            </div>
        </div>
    </nav>
  )
}

export default NavHamburguer