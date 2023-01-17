import { Container } from "../../../../containers/Container";
import InfoMarker from "../../../../components/cards/infoMarker/InfoMarker";
import Video from "../../../../components/cards/video/Video";
import { Thumbnail } from "../../../../components/generals/thumbnail/Thumbnail";
import { Title } from "../../../../components/generals/title/Title";

function IndividualAnimeSidebar({ data, genres, themes }) {
    function GoToTrailer() {
        window.open(data.trailer.url, "_blank")
    }

    return (
        <Container css={{ '@mobile': { display: 'flex', flexDirection: 'column', alignItems: 'center' } }}>
            <Thumbnail absolute radii src={data.images.jpg.large_image_url} alt={data.title} />
            <Container css={{ paddingTop: 445 }}>

                {data.trailer.url !== null && (
                    <Container>
                        <Title css={{ '@mobile': { textAlign: 'center' } }}>Watch The Trailer Now</Title>
                        <Video radii thumb={data.trailer.images.large_image_url} css={{ marginTop: 15, }} onClick={GoToTrailer} />
                    </Container>
                )}

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
            </Container>
        </Container>
    );
}

export default IndividualAnimeSidebar;