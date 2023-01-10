import SVGAdd from '../assets/Svg/All/broken/add.svg'
import Main from '../components/layouts/Main';
import Slider from '../components/Slider';
import FlexContainer from '../containers/FlexContainer';
import CardAnime from '../components/cards/Anime';
import Button4x4 from '../components/Button4x4';
import useAnimeQuery from '../hooks/useAnimeQuery';
import Error404 from '../components/layouts/Error404';
import formatAnimeSession from '../utils/formatAnimeSession'
import useSearchStore from '../store/useSearchStore';
import { Link, useNavigate } from 'react-router-dom';
import Session from '../components/layouts/Session';
import SideBar from '../components/layouts/SideBar';
import GrayContainer from '../containers/GrayContainer';
import MostWatched from '../components/cards/MostWatched';

function Home() {
    const setCurrentPath = useSearchStore(state => state.setCurrentPath);

    const navigate = useNavigate()
    const { data: dataSeasonNow, isLoading: isLoadingSeasonNow, isError: isErrorSeasonNow } = useAnimeQuery('/seasons/now?limit=4');
    const { data: dataTopAnime, isLoading: isLoadingTopAnime, isError: isErrorTopAnime } = useAnimeQuery('/seasons/upcoming?limit=8');
    const { data: dataTopAnime2022, isLoading: isLoadingTopAnime2022, isError: isErrorTopAnime2022 } = useAnimeQuery('/seasons/2022/winter?limit=24');

    const { data: dataSide, isLoading: isLoadingSide, isError: isErrorSide } = useAnimeQuery('/top/anime?limit=16');

    const sessionsList = [
        formatAnimeSession('Animes de Temporada', dataSeasonNow?.data, '/seasons/now'),
        formatAnimeSession('Últimos Animes Anunciados', dataTopAnime?.data, '/seasons/upcoming'),
        formatAnimeSession('Animes condecorados em 2022', dataTopAnime2022?.data, '/seasons/2022/winter')
    ]

    if (isLoadingSeasonNow || isLoadingTopAnime || isLoadingTopAnime2022 || isLoadingSide) {
        return (
            <Main>
                <p>loading...</p>
            </Main>
        );
    }

    if (isErrorSeasonNow || isErrorTopAnime || isErrorTopAnime2022 || isErrorSide) {
        return <Error404 />
    }

    return (
        <>
            <Slider />
            <Main compClass='__home'>
                <SideBar>
                    <GrayContainer>
                        <h2 className='c-title__lateralTitle'> Mais assistidos </h2>

                        {dataSide?.data.map((anime) => (
                            <MostWatched onClick={() => navigate(`/anime/${anime.mal_id}`)} src={anime.images.jpg.image_url} alt={anime.title} name={anime.title} genres={anime.genres} score={anime.score} />
                        ))}

                    </GrayContainer>
                </SideBar>
                <Session>
                    {sessionsList.map((session) => (
                        <div key={session.title}>
                            <FlexContainer size='100%' display='flex' justify='space-between'>
                                <h1 className='c-title__session'>{session.title}</h1>
                                <Link to='/animes'>
                                    <Button4x4 activeFunction={() => { setCurrentPath(session.path); window.scroll(0, 0); }} icon={SVGAdd} />
                                </Link>
                            </FlexContainer>
                            <FlexContainer display='flex' size='100%' wrap='wrap' justify='space-between' gap='15px'>
                                {session.animesList.map((anime) => (
                                    <CardAnime key={anime.title} id={anime.mal_id} capa={anime.images.jpg.image_url} name={anime.title} genres={anime.genres} />
                                ))}
                            </FlexContainer> <br />
                        </div>
                    ))}
                </Session>
            </Main>
        </>
    );



}

export default Home;
