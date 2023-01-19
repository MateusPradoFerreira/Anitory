import CardCharacter from "../../../../../components/cards/cardCharacter/CardCharacter";
import { Text } from "../../../../../components/generals/text/Text";
import { Container } from "../../../../../containers/Container";

function PathCharacters({ data }) {
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
    );
}

export default PathCharacters;