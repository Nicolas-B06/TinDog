import {React}                          from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home                             from './home/Home';
import Header                           from "./comons/header/Header";
import Footer                           from "./comons/footer/Footer";
import './App.css';

export default function  App() {
  
  return (
    <>
      <BrowserRouter>
          
      <Routes>
       <Route path="/" element={<Home />} />

      </Routes>

      </BrowserRouter>
    </>
  );
}

