import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Animes from './pages/Animes';
import Anime from './pages/Anime';
import Manga from './pages/Manga';
import Mangas from './pages/Mangas';
import { globalStyles } from './services/stitchesConfig';
import Header from './components/layout/header/Header';
import NotFound from './pages/Errors/NotFound';
import Footer from './components/layout/footer/Footer';

export const App = () => {
  globalStyles();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/mangas" element={<Mangas />} />
          <Route path="/anime/*" element={<Anime />} />
          <Route path="/manga/*" element={<Manga />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
