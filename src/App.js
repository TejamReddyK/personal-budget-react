import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChartComponent from './Components/ChartComponent'; // Matches the file name
import D3Component from './Components/D3Component';

import './App.css';




import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


function App() {
  
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer"></div>
        <Routes>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      <Footer/>
     
    </Router>
  );
}

export default App;
