import React from 'react'
import {RiComputerLine} from 'react-icons/ri';

function PortfolioDevFrontend() {
    
  return (
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