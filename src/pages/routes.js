import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Animes from './Animes'
import IndividualAnime from './Animes/IndividualAnime'
import Mangas from './Mangas'
import IndividualManga from './Mangas/IndividualManga'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/animes/:id" element={<IndividualAnime />} />
            <Route path="/mangas" element={<Mangas />} />
            <Route path="/mangas/:id" element={<IndividualManga />} />
        </Routes>
    );
};
