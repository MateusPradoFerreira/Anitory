import Main from '../components/layouts/Main';
import FlexContainer from '../containers/FlexContainer';
import CardAnime from '../components/cards/Anime';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import useAnimeQuery from '../hooks/useAnimeQuery';
import Error404 from '../components/layouts/Error404';
import useSearchStore from '../store/useSearchStore';
import Session from '../components/layouts/Session';
import SideBar from '../components/layouts/SideBar';
import MostWatched from '../components/cards/MostWatched';
import { useNavigate } from 'react-router-dom';
import GrayContainer from '../containers/GrayContainer';

function Animes() {
    const currentSearch = useSearchStore(state => state.currentSearch);
    const currentPage = useSearchStore(state => state.currentPage);
    const currentLimit = useSearchStore(state => state.currentLimit);
    const currentPath = useSearchStore(state => state.currentPath);
    const setCurrentAnimePath = useSearchStore(state => state.setCurrentAnimePath);
    const navigate = useNavigate()

    setCurrentAnimePath('/videos');

    const { data: animesList, isLoading, isError } = useAnimeQuery(`${currentPath}?limit=${currentLimit}&page=${currentPage}&q=${currentSearch}`);
    const { data: dataSide, isLoading: isLoadingSide, isError: isErrorSide } = useAnimeQuery('/top/anime?limit=16');

    if (isLoading || isLoadingSide) {
        return (
            <Main compClass='__search'>
                <section className='l-filter'>
                    <SearchBar />
                </section>
                <p>loading...</p>
            </Main>
        );
    }

    if (isError || isErrorSide) {
        return <Error404 />
    }

    return (
        <Main compClass='__search'>
            <section className='l-filter'>
                <SearchBar />
            </section>
            <Session>
                <p className='c-text__path' >{'Anitory > Animes > Buscar' + (currentSearch === '' ? '' : '> ' + currentSearch)}</p>
                {animesList.data.length === 0 ? <p>Sem resultados para a sua busca!</p> : ''}


                <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' height='80vh' gap='15px'>
                    {animesList.data.map((anime) => (
                        <CardAnime
                            key={anime.title}
                            id={anime.mal_id}
                            capa={anime.images.jpg.image_url}
                            name={anime.title}
                            genres={anime.genres}
                        />
                    ))}
                </FlexContainer>
                <Pagination
                    totalCount={animesList.pagination.items.total}
                    pageSize={animesList.pagination.items.per_page}
                    currentPage={currentPage}
                    siblingCount={5}
                    lastPage={animesList.pagination.last_visible_page}
                />
            </Session>
            <SideBar>
                <GrayContainer>
                    <h2 className='c-title__lateralTitle'> Mais assistidos </h2>

                    {dataSide?.data.map((anime) => (
                        <MostWatched onClick={() => navigate(`/anime/${anime.mal_id}`)} src={anime.images.jpg.image_url} alt={anime.title} name={anime.title} genres={anime.genres} score={anime.score} />
                    ))}

                </GrayContainer>
            </SideBar>
        </Main>
    );
}

export default Animes;
