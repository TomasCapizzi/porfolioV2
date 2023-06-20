import {FaCheckCircle} from 'react-icons/fa';
import React from 'react';

function StackProject({item}) {
  return (
    <ul className='tech-list'>
        {item.tech_mern === 1 && <li><FaCheckCircle/>MERN Project</li>}
        {item.tech_aws=== 1 && <li><FaCheckCircle/>AWS Deploy</li>}
        {item.tech_api=== 1 && <li><FaCheckCircle/> API Rest</li>}
        {item.tech_auth=== 1 && <li><FaCheckCircle/> Auth</li>}
        {item.tech_typescript=== 1 && <li><FaCheckCircle/> Typescript</li>}
        {item.tech_db=== 1 && <li><FaCheckCircle/> Database</li>}
        {item.tech_firebase=== 1 && <li><FaCheckCircle/> Firebase</li>}
        {item.tech_responsive=== 1 && <li><FaCheckCircle/> Responsive</li>}
        {item.tech_redux=== 1 && <li><FaCheckCircle/>Redux</li>}
        {item.tech_mongoDB=== 1 && <li><FaCheckCircle/>MongoDB</li>}
    </ul>
  )
}

export default StackProject