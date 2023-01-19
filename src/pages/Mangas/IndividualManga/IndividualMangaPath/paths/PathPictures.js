import { Text } from "../../../../../components/generals/text/Text";
import { Thumbnail } from "../../../../../components/generals/thumbnail/Thumbnail";
import { Container } from "../../../../../containers/Container";

function PathPictures({ data }) {
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
            {data.data.map((picture) => (
                <Thumbnail
                    radii
                    key={picture.jpg.large_image_url}
                    src={picture.jpg.large_image_url}
                    alt={picture.jpg.large_image_url}
                    css={{ width: 200, height: 'auto', '@mobile': { width: '100%' } }}
                />
            ))}
            {data.data.length === 0 && (
                <Text> No Pictures Here! </Text>
            )}
        </Container>
    );
}

export default PathPictures;