import { FaInfo } from 'react-icons/fa';
import {GrDeploy} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import React from 'react';

function Buttons({item}) {
  return (
    <div className='btns'>
        <Link to={'/project/' + item.id}><button><FaInfo/></button></Link>
        <a href={item.route} target='_blank' rel="noreferrer"><button><GrDeploy/></button></a>
    </div>
  )
}

export default Buttons;