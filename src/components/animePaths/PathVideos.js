import useAnimeQuery from "../../hooks/useAnimeQuery";
import useSearchStore from "../../store/useSearchStore";
import Episode from "../cards/Episode";

function PathVideos({ animeID }) {
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
            <h2 className='c-title__subTitle2'>Episódios</h2>
            {
                animeDataPath.episodes.map((episode) => (
                    <Episode
                        key={episode.title}
                        ep={episode.episode}
                        title={episode.title}
                        img={episode.images.jpg.image_url}
                        link={episode.url}
                        alternativeText={'Sem Título'}
                    />
                ))
            }
            {animeDataPath.episodes.length === 0 ? 'Sem episódios por aqui!!' : ''}
            <h2 className='c-title__subTitle2'>Videos promocionais</h2>
            {
                animeDataPath.promo.map((promo) => (
                    <Episode
                        key={promo.title}
                        title={promo.title}
                        img={promo.trailer.images.image_url}
                        link={promo.trailer.url}
                        ep={promo.title}
                    />
                ))
            }
            {animeDataPath.promo.length === 0 ? 'Sem videos promocionais por aqui!!' : ''}
        </div>
    );
}

export default PathVideos;