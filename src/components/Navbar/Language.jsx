import React from 'react'

function Language({english, setEnglishLanguage, setSpanishLanguage}) {
  return (
    <ul className='languages'>
        <li onClick={setEnglishLanguage}  className={english? 'englishOn' : 'englishOff'}>EN</li>
        <li>/</li>
        <li onClick={setSpanishLanguage}  className={english? 'englishOff' : 'englishOn'}>ES</li>
    </ul>
  )
}

export default Language