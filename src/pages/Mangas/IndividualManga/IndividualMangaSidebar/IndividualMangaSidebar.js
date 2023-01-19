import { Container } from "../../../../containers/Container";
import InfoMarker from "../../../../components/cards/infoMarker/InfoMarker";
import { Title } from "../../../../components/generals/title/Title";

function IndividualMangaSidebar({ data, genres, themes }) {
    return (
        <Container grey css={{ marginTop: 30, '@mobile': { width: 300 } }}>
            <Container>
                <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, }}> General information </Title>
                <InfoMarker marker={'Name'} content={data.title} />
                <InfoMarker marker={'Status'} content={data.status} />
                <InfoMarker marker={'Genres'} content={genres} />
                <InfoMarker marker={'Themes'} content={themes} />
            </Container>
            <Container>
                <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, marginTop: 15, }}> Assessment </Title>
                <InfoMarker marker={'Score'} content={data.score} />
                <InfoMarker marker={'Scored by'} content={data.scored_by} />
                <InfoMarker marker={'Rank'} content={'#' + data.rank} />
                <InfoMarker marker={'Favorites'} content={data.favorites} />
                <InfoMarker marker={'Popularity'} content={data.popularity} />
                <InfoMarker marker={'Approved'} content={data.approved === true ? 'Yes' : 'No'} />
            </Container>
        </Container>
    );
}

export default IndividualMangaSidebar;