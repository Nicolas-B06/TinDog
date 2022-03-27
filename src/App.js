import { React }                        from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home                             from './home/Home';
import Vote                             from './vote/Vote';
import Favorites                        from './favorites/Favorites';
import Breeds                           from './breeds/Breeds';
import './App.css';
import { HomeOutlined } from '@mui/icons-material';

export default function  App() {
  
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path= {"/" } element={<Home />} />
                    <Route path= {"/home" } element={<Home />} />
                    <Route path="/vote" element={<Vote/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/breeds" element={<Breeds/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

