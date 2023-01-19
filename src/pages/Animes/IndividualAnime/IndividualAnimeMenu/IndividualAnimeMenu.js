import { Container } from "../../../../containers/Container";
import { Button } from "../../../../components/generals/button/Buttom";
import useAnimeStore from "../../../../store/useAnimeStore";

function IndividualAnimeMenu() {
    const setIndividualPath = useAnimeStore(state => state.setIndividualPath);
    const individualPath = useAnimeStore(state => state.individualPath);

    const paths = [
        'videos',
        'characters',
        'pictures',
        'recommendations',
        'staff',
    ]

    return (
        <Container borderBottom css={{ display: 'flex', marginTop: 30, '@mobile': { flexDirection: 'column', border: 'none' } }}>
            {paths.map((path) => (
                <Button
                    key={path}
                    onClick={() => setIndividualPath(`/${path}`)}
                    color={individualPath === `/${path}` ? 'red' : 'grey'}
                    radii={'top'} style={'text'}
                    css={{ '@mobile': { borderRadius: 10, marginBottom: 5 } }}
                >
                    {path}
                </Button>
            ))}
        </Container>
    );
}

export default IndividualAnimeMenu;