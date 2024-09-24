import {AiFillGithub} from 'react-icons/ai';
import { FaInfoCircle } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import {Link} from 'react-router-dom';
import React from 'react';

function Buttons({item}) {
  return (
    <div className='btns'>
        <Link to={'/project/' + item.id}><button><FaInfoCircle /></button></Link>
        <a href={item.route} target='_blank' rel="noreferrer"><button><IoMdOpen /></button></a>
    </div>
  )
}

export default Buttons;