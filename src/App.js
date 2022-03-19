import {React, useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home/Home';

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

