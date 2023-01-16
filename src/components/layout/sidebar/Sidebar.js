import useAnimeQuery from '../../../hooks/useAnimeQuery';
import { Container } from '../../../containers/Container';
import { Title } from '../../generals/title/Title';
import { useNavigate } from 'react-router-dom';
import SideAnime from '../../cards/sideAnime/SideAnime';

function Sidebar({ path, title }) {
    const { data, isLoading, isError } = useAnimeQuery(path);
    const navigate = useNavigate()

    if (isLoading) {
        return (
            <Container grey>
                <Title css={{ marginBottom: 20 }} embroidery size={'18'} fontWeight={'lg'}>{title}</Title>
                <Container css={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                    <SideAnime isLoading />
                </Container>
            </Container>
        );
    }

    if (isError) {
        navigate('/404');
    }

    return (
        <Container grey>
            <Title css={{ marginBottom: 20 }} embroidery size={'18'} fontWeight={'lg'}>{title}</Title>
            <Container css={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                {data?.data.map((anime) => (
                    <SideAnime key={anime.mal_id} onClick={() => navigate(`/anime/${anime.mal_id}`)} thumbnail={anime.images.jpg.image_url} title={anime.title} genres={anime.genres} score={anime.score} />
                ))}
            </Container>
        </Container>
    );
}

export default Sidebar;