import { BrowserRouter as Router } from 'react-router-dom';
import { globalStyles } from './services/stitchesConfig';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { MainRoutes } from './pages/routes';

export const App = () => {
  globalStyles();

  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </>
  );
};
