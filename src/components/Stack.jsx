import CodeStack from './Stack/CodeStack';
import DesignStack from './Stack/DesignStack';
import React from 'react';
import ToolsStack from './Stack/ToolsStack';

function Stack() {
  return (
    <article className='stack'>    
      <CodeStack/>
      <ToolsStack/> 
      <DesignStack/>
    </article>
  )
}

export default Stack