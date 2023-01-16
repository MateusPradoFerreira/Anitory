import { useNavigate } from "react-router-dom";
import Pagination from "../components/generals/pagination/Pagination";
import SearchBar from "../components/generals/searchBar/SearchBar";
import { Text } from "../components/generals/text/Text";
import { Title } from "../components/generals/title/Title";
import { Main } from "../components/layout/main/Main";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Area from "../containers/area/Area";
import { Container } from "../containers/Container";
import useAnimeQuery from "../hooks/useAnimeQuery";
import useSearchStore from "../store/useSearchStore";
import LoadingRepeat from "../components/loadingRepeat/LoadingRepeat";
import CardManga from "../components/cards/cardManga/CardManga";

function Mangas() {
    const currentSearch = useSearchStore(state => state.currentSearch);
    const currentPage = useSearchStore(state => state.currentPage);
    const currentLimit = useSearchStore(state => state.currentLimit);
    const setCurrentMangaPath = useSearchStore(state => state.setCurrentMangaPath);
    const setCurrentSearch = useSearchStore(state => state.setCurrentSearch);
    const navigate = useNavigate();

    setCurrentMangaPath('/characters');
    const { data, isLoading, isError } = useAnimeQuery(`/manga?limit=${currentLimit}&page=${currentPage}&q=${currentSearch}`);

    const date = new Date();
    const year = date.getFullYear();

    if (isError) {
        navigate('/404');
    }

    const PAGINATION = {
        'totalCount': data?.pagination.items.total,
        'pageSize': data?.pagination.items.per_page,
        'siblingCount': window.screen.width <= 600 ? 2 : 5,
        'lastPage': data?.pagination.last_visible_page,
    }

    return (
        <Main home>
            <Area name={'content'}>
                <SearchBar css={{ marginBottom: 15, }} onSubmit={setCurrentSearch} placeholder={'search for your favorite animes'} />
                <Container css={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, }}>
                    <Title> {currentSearch === '' ? 'Search' : 'Results for ' + currentSearch} </Title>
                    <Title> {year} </Title>
                </Container>

                <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginBottom: 40, '@tablet': { justifyContent: 'space-between', } }}>
                    {isLoading && (
                        <LoadingRepeat number={24} />
                    )}

                    {!isLoading && (
                        <>
                            {data.data.map((anime) => (
                                <CardManga key={anime.title} id={anime.mal_id} thumbnail={anime.images.jpg.image_url} title={anime.title} genres={anime.genres} />
                            ))}

                            {data.data.length === 0 && (<Text>No results for your search!</Text>)}

                            {data.data.length !== 0 && (
                                <Pagination
                                    css={{ marginTop: 20, }}
                                    totalCount={PAGINATION.totalCount}
                                    pageSize={PAGINATION.pageSize}
                                    siblingCount={PAGINATION.siblingCount}
                                    lastPage={PAGINATION.lastPage}
                                />
                            )}
                        </>
                    )}
                </Container>


            </Area>
            <Area name={'sidebar'}>
                <Sidebar path={'/top/manga'} title={'Maybe you like'} />
            </Area>
        </Main>
    );
}

export default Mangas;
