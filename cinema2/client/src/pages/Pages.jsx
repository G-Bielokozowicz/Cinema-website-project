import React from 'react';
import Home from './Home';
import Popular from './Popular';
import { Route, Routes } from 'react-router-dom';
import Repertuar from './Repertuar';
import Movies from './Movies';
import Searched from './Searched';
import MoviePage from '../components/MoviePage';
import BuyTicket from './BuyTicket';
import Login from './LoginPage';
import Register from './RegisterPage';
import ConfirmRegistration from './ConfirmRegistration';

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/popular' element={<Popular />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/repertuar' element={<Repertuar/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/movie/:name' element={<MoviePage/>}/>
        <Route path='/movie/:name/ticket' element={<BuyTicket/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/confirm' element={<ConfirmRegistration/>}/>
    </Routes>
  )
}

export default Pages