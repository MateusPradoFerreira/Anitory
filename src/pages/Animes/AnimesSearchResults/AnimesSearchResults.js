import CardAnime from "../../../components/cards/cardAnime/CardAnime";
import Pagination from "../../../components/generals/pagination/Pagination";
import { Text } from "../../../components/generals/text/Text";
import LoadingRepeat from "../../../components/loadingRepeat/LoadingRepeat";
import { Container } from "../../../containers/Container";

function AnimesSearchResults({ data, isLoading }) {
    const PAGINATION = {
        'totalCount': data?.pagination.items.total,
        'pageSize': data?.pagination.items.per_page,
        'siblingCount': window.screen.width <= 600 ? 2 : 5,
        'lastPage': data?.pagination.last_visible_page,
    }

    return (
        <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 15, marginBottom: 40, '@tablet': { justifyContent: 'space-between', } }}>
            {isLoading && (
                <LoadingRepeat number={24} />
            )}

            {!isLoading && (
                <>
                    {data.data.map((anime) => (
                        <CardAnime key={anime.title} id={anime.mal_id} thumbnail={anime.images.jpg.image_url} title={anime.title} genres={anime.genres} />
                    ))}

                    {data.data.length === 0 && (<Text>No results for your search!</Text>)}

                    {data.data.length !== 0 && (
                        <Pagination
                            css={{ marginTop: 20, }}
                            totalCount={PAGINATION.totalCount}
                            pageSize={PAGINATION.pageSize}
                            siblingCount={PAGINATION.siblingCount}
                            lastPage={PAGINATION.lastPage}
                        />
                    )}
                </>
            )}
        </Container>
    );
}

export default AnimesSearchResults;