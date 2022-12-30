import useAnimeQuery from "../../hooks/useAnimeQuery";
import useSearchStore from "../../store/useSearchStore";

function PathReviews({ animeID }) {
    const currentAnimePath = useSearchStore(state => state.currentAnimePath);
    const { data: AnimeDataPath, isLoading: isLoadingPath, isError: isErrorPath } = useAnimeQuery(`/anime/${animeID}${currentAnimePath}`);

    var animeDataPath = AnimeDataPath?.data

    if (isLoadingPath) {
        return (
            <h2 className='c-title__subTitle2'>Loading...</h2>
        );
    }

    return (
        <div>
            <h2 className='c-title__subTitle2'>Reviews</h2>
            {animeDataPath.map((review) => (
                <p>review = {review.review}</p>
            ))}
        </div>
    );
}

export default PathReviews;