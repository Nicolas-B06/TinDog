import { React }                        from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home                             from './home/Home';
import Vote                             from './vote/Vote';
import Favorites                        from './favorites/Favorites';
import Breeds                           from './breeds/Breeds';
import './App.css';
import Header from "./comons/header/Header";
import Footer from "./comons/footer/Footer";

export default function  App() {
  
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path= {"/" && "/home" } element={<Home />} />
                    <Route path="/vote" element={<Vote/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/breeds" element={<Breeds/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

