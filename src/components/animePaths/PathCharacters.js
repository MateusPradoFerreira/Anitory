import FlexContainer from "../../containers/FlexContainer";
import useAnimeQuery from "../../hooks/useAnimeQuery";
import useSearchStore from "../../store/useSearchStore";
import CardCharacter from "../cards/Characters";

function PathCharacters({ animeID }) {
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
            <h2 className='c-title__subTitle2'>Personagens</h2>
            <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' gap='18px' >
                {animeDataPath.map((character) => (
                    <CardCharacter
                        key={character.character.mal_id}
                        ft={character.character.images.jpg.image_url}
                        name={character.character.name}
                        role={character.role}
                    />
                ))}
            </FlexContainer>
        </div>
    );
}

export default PathCharacters;