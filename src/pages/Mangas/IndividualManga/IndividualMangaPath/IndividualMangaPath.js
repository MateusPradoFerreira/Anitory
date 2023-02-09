import { useParams } from "react-router-dom";
import { Container } from "../../../../containers/Container";
import useAnimeQuery from "../../../../hooks/useAnimeQuery";
import LoadingRepeat from "../../../../components/loadingRepeat/LoadingRepeat";
import useMangaStore from "../../../../store/useMangaStore";
import PathCharacters from "./paths/PathCharacters";
import PathStaff from "./paths/PathStaff";
import PathPictures from "./paths/PathPictures";
import PathRecommendations from "./paths/PathRecommendations";

function IndividualMangaPath() {
    const { id } = useParams();
    const individualPath = useMangaStore(state => state.individualPath);
    const { data, isLoading, isError } = useAnimeQuery(`/manga/${id}${individualPath}`);

    if (isLoading) {
        return (
            <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginTop: 15, '@mobile': { justifyContent: 'center' } }}>
                <LoadingRepeat number={8} />
            </Container>
        );
    }

    if (isError || data?.status) { return <Container css={{ marginTop: 15 }}> We can't find this resource... </Container> }

    if (individualPath === '/characters') { return <PathCharacters data={data} /> }
    if (individualPath === '/pictures') { return <PathPictures data={data} /> }
    if (individualPath === '/staff') { return <PathStaff data={data} /> }
    if (individualPath === '/recommendations') { return <PathRecommendations data={data} /> }

}

export default IndividualMangaPath;