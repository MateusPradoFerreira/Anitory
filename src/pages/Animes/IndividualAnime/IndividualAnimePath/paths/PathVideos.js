import Video from "../../../../../components/cards/video/Video";
import { Text } from "../../../../../components/generals/text/Text";
import { Container } from "../../../../../containers/Container";

function PathVideos({ data }) {
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
            {data.data.episodes.map((episode) => (
                <Container key={episode.title} css={{ width: 200, '@mobile': { width: '100%' } }}>
                    <a href={episode.url} target='_blank'>
                        <Video t
                            humb={episode.images.jpg.small_image_url}
                            radii
                            css={{ width: 200, height: 110, '@mobile': { width: '100%', height: '50vw' } }}
                            shadow={'no'}
                        />
                    </a>
                    <Text css={{ marginTop: 5, }} nowrap>{episode.episode}</Text>
                </Container>
            ))}
            {data.data.promo.map((promo) => (
                <Container key={promo.title} css={{ width: 200, '@mobile': { width: '100%' } }}>
                    <a href={promo.trailer.url} target='_blank'>
                        <Video thumb={promo.trailer.images.small_image_url}
                            radii
                            css={{ width: 200, height: 110, '@mobile': { width: '100%', height: '50vw' } }}
                            shadow={'no'}
                        />
                    </a>
                    <Text css={{ marginTop: 5, }} nowrap>{promo.title}</Text>
                </Container>
            ))}
            {data.data.promo.length === 0 && data.data.episodes.length === 0 && (
                <Text> No Videos Here! </Text>
            )}
        </Container>
    );
}

export default PathVideos;