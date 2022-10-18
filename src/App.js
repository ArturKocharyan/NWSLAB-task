import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import React from "react";
import NavBar from './pages/NavBar'
import TestPage from './pages/TestPaage';

function App() {

 
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/' element={<TestPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
