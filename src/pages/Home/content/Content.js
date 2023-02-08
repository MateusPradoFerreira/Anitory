import formatAnimeSession from "../../../utils/formatAnimeSession";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../containers/Container";
import { Button } from "../../../components/generals/button/Buttom";
import { Title } from "../../../components/generals/title/Title";
import CardAnime from "../../../components/cards/cardAnime/CardAnime";
import SVGadd from "../../../assets/svgs/add.svg";
import LoadingRepeat from "../../../components/loadingRepeat/LoadingRepeat";
import useAnimeQuery from "../../../hooks/useAnimeQuery";
import useAnimeStore from "../../../store/useAnimeStore";

function Content() {
    const setSearchPath = useAnimeStore(state => state.setSearchPath);
    const navigate = useNavigate();

    const { data: data01, isLoading: isLoading01, isError: isError01 } = useAnimeQuery('/seasons/now?limit=4');
    const { data: data02, isLoading: isLoading02, isError: isError02 } = useAnimeQuery('/seasons/upcoming?limit=8');
    const { data: data03, isLoading: isLoading03, isError: isError03 } = useAnimeQuery('/seasons/2022/winter?limit=24');

    const sessionsList = [
        formatAnimeSession('Season Anime', data01?.data, '/seasons/now'),
        formatAnimeSession('Latest Announced Animes', data02?.data, '/seasons/upcoming'),
        formatAnimeSession('Awarded Animes in 2022', data03?.data, '/seasons/2022/winter')
    ]

    if (isError01 || isError02 || isError03) {
        navigate('/404');
    }

    return (
        <>
            {sessionsList.map((session) => (
                <Container key={session.title}>
                    <Container css={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, }}>
                        <Title nowrap border>{session.title}</Title>
                        <Button radii style={'icon'} onClick={() => { navigate('/animes'); setSearchPath(session.path); window.scroll(0, 0); }}>
                            <img src={SVGadd} alt={'add icon'} />
                        </Button>
                    </Container>

                    {!isLoading01 && !isLoading02 && !isLoading03 ? (
                        <Container css={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 15, marginBottom: 40, }}>
                            {session.animesList.map((anime) => (
                                <CardAnime key={anime.title} id={anime.mal_id} thumbnail={anime.images.jpg.image_url} title={anime.title} genres={anime.genres} />
                            ))}
                        </Container>
                    ) : (
                        <Container css={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 15, marginBottom: 40, }}>
                            <LoadingRepeat number={4} />
                        </Container>
                    )}

                </Container>
            ))}
        </>
    );
}

export default Content;