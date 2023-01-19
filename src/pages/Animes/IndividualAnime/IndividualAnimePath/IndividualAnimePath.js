import { useParams } from "react-router-dom";
import { Container } from "../../../../containers/Container";
import useAnimeQuery from "../../../../hooks/useAnimeQuery";
import LoadingRepeat from "../../../../components/loadingRepeat/LoadingRepeat";
import useAnimeStore from "../../../../store/useAnimeStore";
import PathVideos from "./paths/PathVideos";
import PathCharacters from "./paths/PathCharacters";
import PathStaff from "./paths/PathStaff";
import PathPictures from "./paths/PathPictures";
import PathRecommendations from "./paths/PathRecommendations";

function IndividualAnimePath() {
    const { id } = useParams();
    const individualPath = useAnimeStore(state => state.individualPath);
    const { data, isLoading, isError } = useAnimeQuery(`/anime/${id}${individualPath}`);

    if (isLoading) {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginTop: 15, '@mobile': { justifyContent: 'center' } }}>
                <LoadingRepeat number={8} />
            </Container>
        );
    }

    if (isError) { return <Container> Error... </Container> }

    if (individualPath === '/videos') { return <PathVideos data={data} /> }
    if (individualPath === '/characters') { return <PathCharacters data={data} /> }
    if (individualPath === '/pictures') { return <PathPictures data={data} /> }
    if (individualPath === '/staff') { return <PathStaff data={data} /> }
    if (individualPath === '/recommendations') { return <PathRecommendations data={data} /> }

}

export default IndividualAnimePath;