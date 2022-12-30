import { useParams } from 'react-router-dom';
import Main from '../components/layouts/Main';
import FlexContainer from '../containers/FlexContainer';
import Banner from '../components/Banner';
import AnimeNavBar from '../components/navBar/AnimeNavBar';
import RankBox from '../components/RankBox';
import Error404 from '../components/layouts/Error404';
import useAnimeQuery from '../hooks/useAnimeQuery';
import useSearchStore from '../store/useSearchStore';
import formatNameList from '../utils/formatNameList';
import PathVideos from '../components/animePaths/PathVideos';
import PathCharacters from '../components/animePaths/PathCharacters';
import PathStaff from '../components/animePaths/PathStaff';
import PathReviews from '../components/animePaths/PathReviews';
import AnimeSideInfos from '../components/layouts/AnimeSideInfos';
import Session from '../components/layouts/Session';
import TitleTextBox from '../components/layouts/TitleTextBox';

function CurrentAnime() {    
    const params = useParams();
    const animeID = params['*'];
    const currentAnimePath = useSearchStore(state => state.currentAnimePath);

    const { data: AnimeDataMain, isLoading: isLoadingMain, isError: isErrorMain } = useAnimeQuery(`/anime/${animeID}`);

    if (isLoadingMain) {
        return (
            <Main>
                <p>loading...</p>
            </Main>
        );
    }

    if (isErrorMain || animeDataMain?.status === 404) {
        return <Error404 />
    }

    var animeDataMain = AnimeDataMain?.data
    var animeGenres = formatNameList(animeDataMain.genres)
    var animeThemes = formatNameList(animeDataMain.themes)

    var navBarList = [
        { placeholder: 'videos', path: '/videos' },
        { placeholder: 'personagens', path: '/characters' },
        { placeholder: 'Produção', path: '/staff' },
        { placeholder: 'reviews', path: '/reviews' }
    ]
    
    return (
        <>
            <Banner img={animeDataMain.images.jpg.large_image_url} />
            <Main compClass='__anime' >
                <AnimeSideInfos animeDataMain={animeDataMain} animeGenres={animeGenres} animeThemes={animeThemes} />
                <Session>
                    <div className='c-animeHeader' >
                        <FlexContainer size='100%' justify='space-between' display='flex'>
                            <div>
                                <h1 className='c-title__animeName' >{animeDataMain.title}</h1>
                                <p className='c-text__generos' >{animeGenres}</p>
                            </div>
                            <FlexContainer display='flex' size='165px' gap='15px'>
                                <RankBox textTop={'rank'} textCenter={animeDataMain.rank} textBottom={animeDataMain.season} color='#F44336' />
                                <RankBox textTop={'score'} textCenter={animeDataMain.score} textBottom={'by ' + animeDataMain.scored_by} color='#E97000' />
                            </FlexContainer>
                        </FlexContainer>
                    </div>
                    <div className='c-animeTitles' >
                        <FlexContainer size='100%' justify='space-between' display='flex'>
                            <p className='c-text__titles' >{'Anitory > Anime > ' + animeDataMain.title}</p>
                            <p className='c-text__year' >{animeDataMain.year !== null ? animeDataMain.year : animeDataMain.type}</p>
                        </FlexContainer>
                    </div>

                    <TitleTextBox title='Sinopse' text={animeDataMain.synopsis} />
                    <AnimeNavBar navBarList={navBarList} />

                    {currentAnimePath === '/videos' ? <PathVideos animeID={animeID} /> : ''}
                    {currentAnimePath === '/characters' ? <PathCharacters animeID={animeID} /> : ''}
                    {currentAnimePath === '/staff' ? <PathStaff animeID={animeID} /> : ''}
                    {currentAnimePath === '/reviews' ? <PathReviews animeID={animeID} /> : ''}
                </Session>
            </Main>
        </>
    );
}

export default CurrentAnime;
