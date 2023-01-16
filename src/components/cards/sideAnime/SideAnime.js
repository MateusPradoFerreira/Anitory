import { Container } from "../../../containers/Container";
import formatNameList from "../../../utils/formatNameList";
import { Text } from "../../generals/text/Text";
import { SideAnimeIconCSS, SideAnimeThumbnailCSS } from "./SideAnime.styles";
import SVGstar from "../../../assets/svgs/star.svg";
import { Loading } from "../../loading/Loading";

function SideAnime({ onClick, genres, thumbnail, title, score, isLoading }) {

    if (isLoading) {
        return (
            <Container css={{ display: 'flex', gap: 10, cursor: 'pointer', }} onClick={onClick}>
                <Loading radii width={90} height={60} />
                <Container style={{ width: 175, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Loading radii width={'100%'} height={20} />
                    <Loading radii width={'100%'} height={30} />
                </Container>
            </Container>
        )
    }

    genres = formatNameList(genres);
    genres = genres === '' ? 'Gênero indefinido' : genres;
    return (
        <Container css={{ display: 'flex', gap: 10, cursor: 'pointer', }} onClick={onClick}>
            <img src={thumbnail} alt={title} className={SideAnimeThumbnailCSS()} />
            <Container style={{ width: 175, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Container>
                    <Text size={'14'} nowrap>{title}</Text>
                    <Text size={'11'} color={'grey'} nowrap>{genres}</Text>
                </Container>
                <Container css={{ display: 'flex', gap: 5, alignItems: 'center', }}>
                    <img className={SideAnimeIconCSS()} src={SVGstar} alt={'star icon'} />
                    <Text lineHeight={'none'} color={'yellow'} fontWeight={'lg'} size={'14'}>{score}</Text>
                </Container>
            </Container>
        </Container>
    );
}

export default SideAnime;
