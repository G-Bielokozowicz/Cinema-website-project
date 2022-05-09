import React from 'react';
import Home from './Home';
import Popular from './Popular';
import { Route, Routes } from 'react-router-dom';
import Repertuar from './Repertuar';
import Movies from './Movies';
import Searched from './Searched';
import MoviePage from '../components/MoviePage';


function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/popular' element={<Popular />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/repertuar' element={<Repertuar/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/movie/:name' element={<MoviePage/>}/>
    </Routes>
  )
}

export default Pages