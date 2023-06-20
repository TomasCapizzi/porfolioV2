import React from 'react'
import {RiComputerLine} from 'react-icons/ri';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function PortfolioDevFrontend() {
    
    const {elementRef, isIntersecting} = useIntersectionObserver({rootMargin: '-50px'})
  return (
    <li className={isIntersecting? 'frontend on':'frontend off'} ref={elementRef}>
        <div>
            <RiComputerLine/>
            <p>Frontend:</p>
        </div>
        <ul>
            <li>
                <p>React</p>
                <ul className='react-stack'>
                    <li>Custom Hooks</li>
                    <li>React Router</li>
                    <li>Context</li>
                </ul>
            </li>
            <li>Sass</li>

        </ul>
    </li>
  )
}

export default PortfolioDevFrontend