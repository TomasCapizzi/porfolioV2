import React,{useLayoutEffect, useState} from "react";

import Buttons from "./Buttons";
import StackPreview from "./StackPreview";
import Svg from "./Svg";
import {VscCalendar} from 'react-icons/vsc';

export default function Project({item, parameter}){
    const {id} = item
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        const updateSize = () => {
          setSize(window.innerWidth);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
      }, []);

    return (
    <>        
        {
            id <= parameter ?
            <article className='project' id={'item' + item.id}>
                    <a href={item.route} target='_blank' rel="noreferrer"><img src={size>=740 && item.portada? item.img : item.portada} alt="project"/></a>
                    <div className='view-hover'>
                        <Svg/>
                        <div className='view-descrip'>
                            <h5>{item.name}</h5>
                            {item.date && <p className="date"><VscCalendar/>{item.date}</p>}
                            <StackPreview item={item} />
                            <Buttons item={item}/>
                        </div>
                    </div>
            </article>
            : null
        }
    </>
        
    )
}