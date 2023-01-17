import { Container } from "../../../../containers/Container";
import InfoMarker from "../../../../components/cards/infoMarker/InfoMarker";
import { Title } from "../../../../components/generals/title/Title";

function IndividualAnimeSidebar({ data, genres, themes }) {
    return (
        <Container grey css={{ marginTop: 30, '@mobile': { width: 300 } }}>
            <Container>
                <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, }}> General information </Title>
                <InfoMarker marker={'Name'} content={data.title} />
                <InfoMarker marker={'Status'} content={data.status} />
                <InfoMarker marker={'Aired'} content={data.aired.string} />
                <InfoMarker marker={'Source'} content={data.source} />
                <InfoMarker marker={'N° Episodes'} content={data.episodes} />
                <InfoMarker marker={'Duration'} content={data.duration} />
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
            <Container>
                <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, marginTop: 15, }}> Studios </Title>
                {data.studios.map((studio) => (
                    <InfoMarker key={studio.name} marker={studio.type} content={studio.name} />
                ))}
            </Container>
            <Container>
                <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, marginTop: 15, }}> Producers </Title>
                {data.producers.map((producer) => (
                    <InfoMarker key={producer.name} marker={producer.type} content={producer.name} />
                ))}
            </Container>
        </Container>
    );
}

export default IndividualAnimeSidebar;