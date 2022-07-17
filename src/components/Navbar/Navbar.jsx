import React,{useContext} from 'react';

import Language from './Language';
import { LanguageContext } from '../../context/LanguageContext';
import Links from './Links';

export default function Navbar(){

    const {english,setSpanishLanguage, setEnglishLanguage} = useContext(LanguageContext)
    return (
        <nav className='menu'>
            <div className='nav-container'>
                <Links english={english} />
                <Language english={english} setEnglishLanguage={setEnglishLanguage} setSpanishLanguage={setSpanishLanguage} />
            </div>
        </nav>
    ) 
   
}