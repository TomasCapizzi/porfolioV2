import NavHamburguer from './NavHamburguer'
import Navbar from './Navbar'
import React from 'react'

function Container() {

    function dropMenu(){        
        const menuHamb = document.getElementById('menu-hamb')
        menuHamb.classList.toggle('on')
    }
  return (
    <>
        <Navbar/>
        <NavHamburguer dropMenu={dropMenu} />
    </>
  )
}

export default Container