import React from 'react'
import {VscServerProcess} from 'react-icons/vsc';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function PortfolioDevBackend() {
    const {elementRef, isIntersecting} = useIntersectionObserver({rootMargin: '-50px'})
  return (
    <li className={isIntersecting?'backend on': 'backend off'} ref={elementRef}>
        <div>
            <VscServerProcess/>
            <p>Backend:</p>
        </div>
        <ul>
            <li>SQL</li>
            <li>Node</li>
            <li>Express</li>
            <li>Sequelize</li>
        </ul>
    </li>
  )
}

export default PortfolioDevBackend