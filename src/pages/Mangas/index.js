import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/generals/searchBar/SearchBar";
import { Title } from "../../components/generals/title/Title";
import { Main } from "../../components/layout/main/Main";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Area from "../../containers/area/Area";
import { Container } from "../../containers/Container";
import useAnimeQuery from "../../hooks/useAnimeQuery";
import useMangaStore from "../../store/useMangaStore";
import MangasSearchResults from "./MangasSearchResults/MangasSearchResults";

function Manga() {
    const search = useMangaStore(state => state.search);
    const searchPath = useMangaStore(state => state.searchPath);
    const currentPage = useMangaStore(state => state.currentPage);
    const setIndividualPath = useMangaStore(state => state.setIndividualPath);
    const setSearch = useMangaStore(state => state.setSearch);
    const navigate = useNavigate();
    setIndividualPath('/characters');

    const { data, isLoading, isError } = useAnimeQuery(`${searchPath}?&limit=24&page=${currentPage}&q=${search}`);

    const date = new Date();
    const year = date.getFullYear();

    if (isError) {
        navigate('/404');
    }

    return (
        <Main home>
            <Area name={'content'}>
                <SearchBar css={{ marginBottom: 15, }} onSubmit={setSearch} placeholder={'search for your favorite manga'} />
                <Container css={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, }}>
                    <Title> {search === '' ? 'Search' : 'Results for ' + search} </Title>
                    <Title> {year} </Title>
                </Container>
                <MangasSearchResults data={data} isLoading={isLoading} />
            </Area>
            <Area name={'sidebar'}>
                <Sidebar path={'/seasons/2022/fall?limit=16'} title={'Maybe you like'} />
            </Area>
        </Main>
    );
}

export default Manga;
