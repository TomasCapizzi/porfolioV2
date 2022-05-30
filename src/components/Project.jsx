import {FaCheckCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import React from "react";

export default function Project({item, parameter}){
    const {id} = item
    console.log(id);
    return (
    <>        
        {
            id <= parameter ?
            <article className='project' id={'item' + item.id}>
                    <a href={item.route}><img src={item.img} alt="project"/></a>
                    <div className='view-hover'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ED6C4E" fillOpacity="1" d="M0,64L720,224L1440,160L1440,320L720,320L0,320Z"></path></svg>
                        <div className='view-descrip'>
                            <h5>{item.name}</h5>
                            <div className='btns'>
                                <Link to={'/project/' + item.id}><button>Detail</button></Link>
                                <button><a href={item.route} target='_blank' rel="noreferrer">Deploy</a></button>
                            </div>
                        </div>
                    </div>
            </article>
            : null
        }
    </>
        
    )
}