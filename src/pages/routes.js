import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Animes from './Animes'
import IndividualAnime from './Animes/IndividualAnime'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/animes/:id" element={<IndividualAnime />} />
        </Routes>
    );
};
