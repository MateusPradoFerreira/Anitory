import FlexContainer from "../../containers/FlexContainer";
import useAnimeQuery from "../../hooks/useAnimeQuery";
import useSearchStore from "../../store/useSearchStore";
import CardPerson from "../cards/Person";

function PathStaff({ animeID }) {
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
            <h2 className='c-title__subTitle2'>Produção</h2>
            <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' gap='18px' >
                {animeDataPath.map((staff) => (
                    <CardPerson
                        key={staff.person.mal_id}
                        ft={staff.person.images.jpg.image_url}
                        name={staff.person.name}
                        url={staff.person.url}
                        positions={staff.positions}
                    />
                ))}
            </FlexContainer>
        </div>
    );
}

export default PathStaff;