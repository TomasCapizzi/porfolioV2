import {SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremiere} from 'react-icons/si';

import {IoBrush} from 'react-icons/io5';
import React from 'react';

function DesignStack() {
  return (
    <div className='list'>
        <span><IoBrush/></span>
        <ul>
            <li><SiAdobepremiere/><p>Premiere</p></li>
            <li><SiAdobeaftereffects/><p>After Effects</p></li>
            <li><SiAdobeillustrator/><p>Illustrator</p></li>
            <li><SiAdobephotoshop/><p>Photoshop</p></li>
        </ul>
  </div>
  )
}

export default DesignStack