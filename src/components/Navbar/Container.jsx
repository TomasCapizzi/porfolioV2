import React,{useRef} from 'react'

import NavHamburguer from './NavHamburguer'
import Navbar from './Navbar'

function Container() {
  const menuHambRef = useRef()

    function dropMenu(){        
      menuHambRef.current.classList.toggle('on')
    }
  return (
    <>
        <Navbar/>
        <NavHamburguer dropMenu={dropMenu} menuHambRef={menuHambRef} />
    </>
  )
}

export default Container