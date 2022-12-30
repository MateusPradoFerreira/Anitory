import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/styles.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Animes from './pages/Animes';
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import CurrentAnime from './pages/CurrentAnime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animes' element={<Animes />} />
          <Route path='/anime/*' element={<CurrentAnime />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
