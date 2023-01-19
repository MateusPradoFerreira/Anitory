import CardCharacter from "../../../../../components/cards/cardCharacter/CardCharacter";
import { Text } from "../../../../../components/generals/text/Text";
import { Container } from "../../../../../containers/Container";

function PathStaff({ data }) {
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
            {data.data.map((staff) => (
                <CardCharacter
                    key={staff.person.mal_id}
                    thumbnail={staff.person.images.jpg.image_url}
                    name={staff.person.name}
                    role={staff.positions}
                />
            ))}
            {data.data.length === 0 && (
                <Text> No Staff Here! </Text>
            )}
        </Container>
    );
}

export default PathStaff;