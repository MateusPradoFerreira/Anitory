import Infos from "../cards/Infos";
import GrayContainer from "../../containers/GrayContainer";
import Trailer from "../cards/Trailer";
import SideBar from "./SideBar";

function AnimeSideInfos({ animeDataMain, animeGenres, animeThemes }) {
    return (
        <SideBar>
            <img className='c-animeFolder' src={animeDataMain.images.jpg.large_image_url} alt='img' />
            <div style={{ marginTop: '450px' }} />
            {animeDataMain.trailer.url === null ? '' :
                <>
                    <h2 className='c-title__subTitle'>Assista ao trailer</h2>
                    <Trailer
                        src={animeDataMain.trailer.images.large_image_url}
                        width='300px'
                        height='157px'
                        link={animeDataMain.trailer.url}
                    />
                </>
            }
            <GrayContainer>
                <div className='c-containerGray__box'>
                    <h2 className='c-title__lateralTitle'>Informações Gerais</h2>
                    <div>
                        <Infos span={'Nome:'} info={animeDataMain.title} />
                        {animeDataMain.year !== null && animeDataMain.season !== null ?
                            <Infos span={'Season:'} info={animeDataMain.year + ' | ' + animeDataMain.season} /> : ''
                        }
                        <Infos span={'Status:'} info={animeDataMain.status} />
                        <Infos span={'Exibição:'} info={animeDataMain.aired.string} />
                        <Infos span={'Source:'} info={animeDataMain.source} />
                        <Infos span={'N° Episódios:'} info={animeDataMain.episodes} />
                        <Infos span={'Duração:'} info={animeDataMain.duration} />
                        {animeGenres !== '' ?
                            <Infos span={'Gêneros:'} info={animeGenres} /> : ''
                        }
                        {animeThemes !== '' ?
                            <Infos span={'Temas:'} info={animeThemes} /> : ''
                        }
                    </div>
                </div>
                <div className='c-containerGray__box'>
                    <h2 className='c-title__lateralTitle'>Avaliação</h2>
                    <div>
                        <Infos span={'Score:'} info={animeDataMain.score} />
                        <Infos span={'Avaliado por:'} info={animeDataMain.scored_by} />
                        <Infos span={'Rank:'} info={'#' + animeDataMain.rank} />
                        <Infos span={'Favoritos:'} info={animeDataMain.favorites} />
                        <Infos span={'Pupularidade:'} info={animeDataMain.popularity} />
                        <Infos span={'Aprovação :'} info={animeDataMain.approved === true ? 'sim' : 'não'} />
                    </div>
                </div>
                <div className='c-containerGray__box'>
                    <h2 className='c-title__lateralTitle'>Studios</h2>
                    <div>
                        {animeDataMain.studios.map((studio) => (
                            <Infos key={studio.name} span={studio.type + ':'} info={studio.name} />
                        ))}
                    </div>
                </div>
                <div className='c-containerGray__box'>
                    <h2 className='c-title__lateralTitle'>Produtores</h2>
                    <div>
                        {animeDataMain.producers.map((producer) => (
                            <Infos key={producer.name} span={producer.type + ':'} info={producer.name} />
                        ))}
                    </div>
                </div>
            </GrayContainer>
        </SideBar>
    );
}

export default AnimeSideInfos;