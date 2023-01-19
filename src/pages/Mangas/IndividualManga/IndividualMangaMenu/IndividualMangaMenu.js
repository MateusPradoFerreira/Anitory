import { Container } from "../../../../containers/Container";
import { Button } from "../../../../components/generals/button/Buttom";
import useMangaStore from "../../../../store/useMangaStore";

function IndividualMangaMenu() {
    const setIndividualPath = useMangaStore(state => state.setIndividualPath);
    const individualPath = useMangaStore(state => state.individualPath);

    const paths = [
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

export default IndividualMangaMenu;