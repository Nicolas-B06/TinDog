import {React} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home/Home';
import Header from "./comons/header/Header";
import Footer from "./comons/footer/Footer";

export default function  App() {
  
  return (
    <>
      <BrowserRouter>
          <Header/>
      <Routes>
       <Route path="/" element={<Home />} />

      </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

