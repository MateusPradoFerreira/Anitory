import CardManga from "../../../../../components/cards/cardManga/CardManga";
import { Text } from "../../../../../components/generals/text/Text";
import { Container } from "../../../../../containers/Container";

function PathRecommendations({ data }) {
    return (
        <Container css={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            gap: 20,
            marginTop: 15,
            '@tablet': { justifyContent: 'space-between' },
            '@mobile': { justifyContent: 'center' },
        }}>
            {data.data.map((anime) => (
                <CardManga
                    key={anime.entry.title}
                    id={anime.entry.mal_id}
                    thumbnail={anime.entry.images.jpg.image_url}
                    title={anime.entry.title} genres={[]}
                />
            ))}
            {data.data.length === 0 && (
                <Text> No Recommendations Here! </Text>
            )}
        </Container>
    );
}

export default PathRecommendations;