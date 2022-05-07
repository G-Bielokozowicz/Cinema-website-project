import React from 'react';
import Home from './Home';
import Popular from './Popular';
import { Route, Routes } from 'react-router-dom';
import Repertuar from './Repertuar';
import Movies from './Movies';


function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/popular' element={<Popular />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/repertuar' element={<Repertuar/>}/>
    </Routes>
  )
}

export default Pages