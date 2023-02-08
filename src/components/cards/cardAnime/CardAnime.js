import { Link } from "react-router-dom";
import { Text } from "../../generals/text/Text";
import formatNameList from "../../../utils/formatNameList";
import { CardAnimeAnchorCSS, CardAnimeThumbnailCSS } from "./CardAnime.styles";
import { Loading } from "../../loading/Loading";

function CardAnime({ id, genres, thumbnail, title, isLoading }) {
    if (isLoading) {
        return (
            <div className={CardAnimeAnchorCSS()}>
                <Loading radii width={'100%'} css={{ height: 300, '@mobile': { height: '40vw', } }} />
                <Loading radii width={'100%'} height={10} css={{ marginTop: 5 }} />
                <Loading radii width={'100%'} height={20} css={{ marginTop: 5 }} />
            </div>
        )
    }

    genres = formatNameList(genres);
    genres = genres === '' ? 'Gênero indefinido' : genres;
    return (
        <Link to={'/animes/' + id} onClick={() => { window.scroll(0, 0) }} className={CardAnimeAnchorCSS()}>
            <img className={CardAnimeThumbnailCSS()} src={thumbnail} alt={title} />
            <Text css={{ '@mobile': { fontSize: 9 } }} size={'11'} color={'grey'} nowrap>{genres}</Text>
            <Text css={{ '@mobile': { fontSize: 11 }, maxWidth: 200 }} size={'14'} nowrap>{title}</Text>
        </Link>
    );
}

export default CardAnime;
