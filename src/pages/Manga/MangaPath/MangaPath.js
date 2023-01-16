import { Link, useParams } from "react-router-dom";
import { Container } from "../../../containers/Container";
import useAnimeQuery from "../../../hooks/useAnimeQuery";
import useSearchStore from "../../../store/useSearchStore";
import CardCharacter from "../../../components/cards/cardCharacter/CardCharacter";
import LoadingRepeat from "../../../components/loadingRepeat/LoadingRepeat";
import Video from "../../../components/cards/video/Video";
import { Text } from "../../../components/generals/text/Text";
import { Thumbnail } from "../../../components/generals/thumbnail/Thumbnail";
import CardAnime from "../../../components/cards/cardAnime/CardAnime";

function MangaPath() {
    const params = useParams();
    const mangaID = params['*'];
    const mangaPath = useSearchStore(state => state.currentMangaPath);
    const { data, isLoading, isError } = useAnimeQuery(`/manga/${mangaID}${mangaPath}`);

    if (isLoading) {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginTop: 15, '@tablet': { justifyContent: 'space-between', } }}>
                <LoadingRepeat number={8} />
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                Error...
            </Container>
        )
    }

    if (mangaPath === '/videos') {
        return (
            <Container>
                <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 20, marginTop: 15, '@tablet': { justifyContent: 'space-between', } }}>
                    {data.data.episodes.map((episode) => (
                        <Container key={episode.title} css={{ width: 200, }}>
                            <a href={episode.url} target='_blank'>
                                <Video thumb={episode.images.jpg.small_image_url} radii css={{ width: 200, height: 110, }} shadow={'no'} />
                            </a>
                            <Text css={{ marginTop: 5, }} nowrap>{episode.episode}</Text>
                        </Container>
                    ))}
                    {data.data.promo.map((promo) => (
                        <Container key={promo.title} css={{ width: 200, }}>
                            <a href={promo.trailer.url} target='_blank'>
                                <Video thumb={promo.trailer.images.small_image_url} radii css={{ width: 200, height: 110, }} shadow={'no'} />
                            </a>
                            <Text css={{ marginTop: 5, }} nowrap>{promo.title}</Text>
                        </Container>
                    ))}
                    {data.data.promo.length === 0 && data.data.episodes.length === 0 && (
                        <Text> No Videos Here! </Text>
                    )}
                </Container>
            </Container>
        )
    }

    if (mangaPath === '/characters') {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 20, marginTop: 15, '@tablet': { justifyContent: 'space-between', } }}>
                {data.data.map((character) => (
                    <CardCharacter
                        key={character.character.mal_id}
                        thumbnail={character.character.images.jpg.image_url}
                        name={character.character.name}
                        role={character.role}
                    />
                ))}
                {data.data.length === 0 && (
                    <Text> No Characters Here! </Text>
                )}
            </Container>
        )
    }

    if (mangaPath === '/pictures') {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginTop: 15, '@tablet': { justifyContent: 'space-between', } }}>
                {data.data.map((picture) => (
                    <Thumbnail radii key={picture.jpg.large_image_url} src={picture.jpg.large_image_url} alt={picture.jpg.large_image_url} css={{ width: 200, height: 'auto' }} />
                ))}
                {data.data.length === 0 && (
                    <Text> No Pictures Here! </Text>
                )}
            </Container>
        )
    }

    if (mangaPath === '/recommendations') {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginTop: 15, '@tablet': { justifyContent: 'space-between', } }}>
                {data.data.map((anime) => (
                    <CardAnime key={anime.entry.title} id={anime.entry.mal_id} thumbnail={anime.entry.images.jpg.image_url} title={anime.entry.title} genres={[]} />
                ))}
                {data.data.length === 0 && (
                    <Text> No Recommendations Here! </Text>
                )}
            </Container>
        )
    }

    if (mangaPath === '/reviews') {
        return (
            <Container>
            </Container>
        )
    }
}

export default MangaPath;