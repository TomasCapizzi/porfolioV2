import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';
import React from 'react';

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetail/>}/>
    </Routes>
  )
}

export default Routing