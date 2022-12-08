import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Css
import './scss/styles.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Animes from './pages/Animes';
import Mangas from './pages/Mangas';
import Personagens from './pages/Personagens';
import AnimeEspecifico from './pages/AnimeEspecifico';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animes' element={<Animes />} />
        <Route path='/mangas' element={<Mangas />} />
        <Route path='/personagens' element={<Personagens />} />
        <Route path='/anime' element={<AnimeEspecifico />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
