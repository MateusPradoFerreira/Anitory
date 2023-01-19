import { Container } from '../../../containers/Container';
import { Button } from '../../generals/button/Buttom';
import { Logo } from '../../generals/logo/Logo';
import NavBar from '../../generals/navbar/NavBar';
import SVGsearch from '../../../assets/svgs/search.svg';
import SVGarrange from '../../../assets/svgs/arrangeCircle.svg';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../services/api';
import MobileMenu from './mobile/MobileMenu';

function Header() {
  const navigate = useNavigate();

  var navBarList = [
    { name: 'Home', href: '/' },
    { name: 'Animes', href: '/animes' },
    { name: 'Mangas', href: '/mangas' },
  ];

  async function random() {
    const { data } = await API.get('/random/anime');
    if (data?.data.mal_id !== undefined) {
      navigate(`/animes/${data.data.mal_id}`)
    }
  }

  return (
    <header>
      <Container css={{
        layout: 1200,
        padding: '15px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@tablet': { padding: '15px 20px', }
      }} >
        <Logo>Anitory</Logo>

        <Container css={{ display: 'block', '@mobile': { display: 'none' } }}>
          <NavBar navList={navBarList} />
        </Container>

        <Container css={{ display: 'flex', gap: 20, '@mobile': { display: 'none' } }}>
          <Button onClick={random} style={'icon'} radii>
            <img src={SVGarrange} alt={''} />
          </Button>
          <Button onClick={() => navigate('/animes')} style={'icon'} radii>
            <img src={SVGsearch} alt={''} />
          </Button>
        </Container>

        <Container css={{ display: 'none', '@mobile': { display: 'block' } }}>
          <MobileMenu />
        </Container>
      </Container>
    </header >
  );
}

export default Header;
