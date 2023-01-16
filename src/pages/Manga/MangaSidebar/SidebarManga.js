import { Container } from "../../../containers/Container";
import InfoMarker from "../../../components/cards/infoMarker/InfoMarker";
import { Thumbnail } from "../../../components/generals/thumbnail/Thumbnail";
import { Title } from "../../../components/generals/title/Title";

function SidebarManga({ data, genres, themes }) {
    return (
        <Container>
            <Thumbnail absolute radii src={data.images.jpg.large_image_url} alt={data.title} />
            <Container css={{ paddingTop: 445 }}>
                <Container grey css={{ marginTop: 30, }}>
                    <Container>
                        <Title embroidery size={'18'} fontWeight={'lg'} css={{ marginBottom: 15, }}> General information </Title>
                        <InfoMarker marker={'Name'} content={data.title} />
                        <InfoMarker marker={'Status'} content={data.status} />
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
            </Container>
        </Container>
    );
}

export default SidebarManga;