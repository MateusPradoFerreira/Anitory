import { useNavigate } from "react-router-dom";
import { Button } from "../../components/generals/button/Buttom";
import SearchBar from "../../components/generals/searchBar/SearchBar";
import { Title } from "../../components/generals/title/Title";
import { Main } from "../../components/layout/main/Main";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Area from "../../containers/area/Area";
import { Container } from "../../containers/Container";
import useAnimeQuery from "../../hooks/useAnimeQuery";
import useAnimeStore from "../../store/useAnimeStore";
import AnimesSearchResults from "./AnimesSearchResults/AnimesSearchResults";
import AnimesSelect from "./AnimesSelect";
import AnimesSelect2 from "./AnimesSelect2";

function Animes() {
    const search = useAnimeStore(state => state.search);
    const searchPath = useAnimeStore(state => state.searchPath);
    const currentPage = useAnimeStore(state => state.currentPage);
    const rating = useAnimeStore(state => state.rating);
    const orderBy = useAnimeStore(state => state.orderBy);
    const sort = useAnimeStore(state => state.sort);
    const setIndividualPath = useAnimeStore(state => state.setIndividualPath);
    const setSearch = useAnimeStore(state => state.setSearch);
    const navigate = useNavigate();
    setIndividualPath('/videos');

    const { data, isLoading, isError } = useAnimeQuery(`${searchPath}?&limit=24&page=${currentPage}&q=${search}&rating=${rating}&order_by=${orderBy}&sort=${sort}`);

    document.title = `${search === '' ? "Explore" : search} - Anitory`;

    const date = new Date();
    const year = date.getFullYear();

    if (isError) {
        navigate('/404');
    }

    return (
        <Main home>
            <Area name={'content'}>
                <Container css={{ display: 'flex', justifyContent: 'space-between', gap: 5, '@tablet': { flexWrap: 'wrap' } }}>
                    <SearchBar css={{ marginBottom: 15, '@tablet': { marginBottom: 0, } }} onSubmit={setSearch} placeholder={'search for your favorite animes'} />
                    <AnimesSelect2 />
                    <AnimesSelect />
                </Container>
                <Container css={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, }}>
                    <Title> {search === '' ? 'Search' : 'Results for ' + search} </Title>
                    <Title> {year} </Title>
                </Container>
                <AnimesSearchResults data={data} isLoading={isLoading} />
            </Area>
            <Area name={'sidebar'}>
                <Sidebar path={'/seasons/2022/fall?limit=16'} title={'Maybe you like'} />
            </Area>
        </Main>
    );
}

export default Animes;
