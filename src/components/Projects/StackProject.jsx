import {FaCheckCircle} from 'react-icons/fa';
import React from 'react';

function StackProject({item}) {
  return (
    <ul className='tech-list'>
        {
          item.tech.mern && <li><FaCheckCircle/>MERN Project</li>
        }
        {
          item.tech.aws && <li><FaCheckCircle/>AWS Deploy</li>
        }
        {item.tech.api && <li><FaCheckCircle/> API Rest</li>}
        {item.tech.auth && <li><FaCheckCircle/> Auth</li>}
        {item.tech.db && <li><FaCheckCircle/> Firestore</li>}
        {item.tech.ls && <li><FaCheckCircle/> Local Storage</li>}
        {item.tech.responsive && <li><FaCheckCircle/> Responsive</li>}
        {item.tech.redux && <li><FaCheckCircle/>Redux</li>}
        {item.tech.sass && <li><FaCheckCircle/> Sass</li>}
        {item.tech.customHook && <li><FaCheckCircle/> Custom Hooks</li>}
        {item.tech.bulma && <li><FaCheckCircle/> Bulma Css</li>}
        {
          item.tech.mongoDB && <li><FaCheckCircle/>MongoDB Atlas</li>
        }

    </ul>
  )
}

export default StackProject