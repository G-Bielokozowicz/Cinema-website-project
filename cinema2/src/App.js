import React, { Component }  from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SerachBar from './components/SearchBar';
import NavigationBar from './components/NavigationBar';
import Pages from './pages/Pages';
import Header from './components/Header';



function App() {
  return (
    <>
      <div>
          {/* <SerachBar /> */}
          <Header/>
          <NavigationBar />
          <Pages />
      </div>
    <ToastContainer />
    </>
  );
}

export default App;
