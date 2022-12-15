import { Component } from 'react';
import { Link } from 'react-router-dom';

// Img
import tohruSad from '../img/tohruSad.png';

// Components
import Main from '../components/layouts/Main';
import FlexContainer from '../containers/FlexContainer';
import Banner from '../components/Banner';
import Trailer from '../components/cards/Trailer';
import AnimeNavBar from '../components/navBar/AnimeNavBar'
import RankBox from '../components/RankBox';
import CardCharacter from '../components/cards/Characters';
import Episode from '../components/cards/Episode';
import CardPerson from '../components/cards/Person';

// Axios
import Api from '../api/Api';

class Anime extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getError = this.getError.bind(this);
        this.getFetch = this.getFetch.bind(this);
    }

    state = {
        status: 'loading',
        View: 'episodes',
        Anime: []
    }

    getError(error) {
        this.setState({
            status: 'error',
            errorCode: error.response.status,
            statusText: error.response.statusText
        })
    }

    concatenarGeneros(genresList) {
        var genres = '';
        var i = 0;
        genresList.map((genre) => {
            if (i === 0) {
                genres = genres + genre.name;
            } else {
                genres = genres + ' | ' + genre.name;
            }
            i++;
        });
        return genres;
    }

    async getFetch(url, parameters) {
        var prmts = '?';
        for (const [key, value] of Object.entries(parameters)) {
            prmts = prmts + '&' + key + '=' + value;
        }

        var completeUrl = url + prmts;
        const response = await Api.get(completeUrl).catch((error) => this.getError(error));
        return response;
    }

    async componentDidMount() {
        window.scroll(0, 0);

        var urlClass = new URL(window.location.href);
        var id = urlClass.searchParams.get("id");

        if (id === null) {
            const response = await this.getFetch('/random/anime', {});
            const responseView = await this.getFetch('/anime/' + response.data.data.mal_id + '/videos', {});

            if (this.state.status === 'loading') {
                this.setState({
                    status: 'success',
                    Anime: response.data.data,
                    View: 'videos',
                    ViewData: responseView.data.data,
                    genres: this.concatenarGeneros(response.data.data.genres)
                });
            };

        } else {

            const response = await this.getFetch('/anime/' + id, {});
            const responseView = await this.getFetch('/anime/' + id + '/videos', {});

            if (this.state.status === 'loading') {
                this.setState({
                    status: 'success',
                    Anime: response.data.data,
                    View: 'videos',
                    ViewData: responseView.data.data,
                    genres: this.concatenarGeneros(response.data.data.genres)
                });
            };
        };
    }

    async setView(view) {
        var urlClass = new URL(window.location.href);
        var id = urlClass.searchParams.get("id");
        const responseView = await this.getFetch('/anime/' + id + '/' + view, {});
        console.log(responseView.data.data)

        this.setState({
            status: 'success',
            Anime: this.state.Anime,
            View: view,
            ViewData: responseView.data.data,
            genres: this.state.genres
        });
    }

    render() {

        var navBarList = [
            {
                placeholder: 'vídeos',
                function: () => this.setView('videos')
            }, {
                placeholder: 'personagens',
                function: () => this.setView('characters')
            }, {
                placeholder: 'Produção',
                function: () => this.setView('staff')
            }, {
                placeholder: 'reviews',
                function: () => this.setView('reviews')
            }
        ]

        if (this.state.status === 'success') {
            return (
                <>
                    <Banner img={this.state.Anime.images.jpg.large_image_url} />
                    <Main compClass='__anime' >
                        <section className='l-latBar' >
                            <img className='c-animeFolder' src={this.state.Anime.images.jpg.large_image_url} alt='img' />
                            <div style={{ marginTop: '450px' }} />
                            {this.state.Anime.trailer.url === null ? '' :
                                <>
                                    <h2 className='c-title__subTitle'>Assista ao trailer</h2>
                                    <Trailer
                                        src={this.state.Anime.trailer.images.large_image_url}
                                        width='300px'
                                        height='157px'
                                        link={this.state.Anime.trailer.url}
                                    />
                                </>
                            }
                        </section>
                        <section className='l-sessions' >
                            <div className='c-animeHeader' >
                                <FlexContainer size='100%' justify='space-between' display='flex'>
                                    <div>
                                        <h1 className='c-title__animeName' >{this.state.Anime.title}</h1>
                                        <p className='c-text__generos' >{this.state.genres}</p>
                                    </div>
                                    <FlexContainer display='flex' size='165px' gap='15px'>
                                        <RankBox textTop={'score'} textCenter={this.state.Anime.rank} textBottom={this.state.Anime.season} color='#F44336' />
                                        <RankBox textTop={'score'} textCenter={this.state.Anime.score} textBottom={'by ' + this.state.Anime.scored_by} color='#E97000' />
                                    </FlexContainer>
                                </FlexContainer>
                            </div>
                            <div className='c-animeTitles' >
                                <FlexContainer size='100%' justify='space-between' display='flex'>
                                    <p className='c-text__titles' >{'Anitory > Anime > ' + this.state.Anime.title}</p>
                                    <p className='c-text__year' >{this.state.Anime.year !== null ? this.state.Anime.year : this.state.Anime.type}</p>
                                </FlexContainer>
                            </div>
                            <h2 className='c-title__subTitle'>Sinopse</h2>
                            <p className='c-text__sinopse'>{this.state.Anime.synopsis}</p>
                            <AnimeNavBar navBarList={navBarList} />

                            {this.state.View === 'videos' ? <div>
                                <h2 className='c-title__subTitle2'>Episódios</h2>
                                {this.state.ViewData.episodes.map((episode) => (
                                    <Episode
                                        key={episode.title}
                                        ep={episode.episode}
                                        title={episode.title}
                                        img={episode.images.jpg.image_url}
                                        link={episode.url}
                                        alternativeText={'Sem Título'}
                                    />
                                ))}
                                {this.state.ViewData.episodes.length === 0 ? 'Sem episódios por aqui!!' : ''}
                                <h2 className='c-title__subTitle2'>Videos promocionais</h2>
                                {this.state.ViewData.promo.map((promo) => (
                                    <Episode
                                        key={promo.title}
                                        title={promo.title}
                                        img={promo.trailer.images.image_url}
                                        link={promo.trailer.url}
                                        ep={this.state.Anime.title}
                                    />
                                ))}
                                {this.state.ViewData.promo.length === 0 ? 'Sem videos promocionais por aqui!!' : ''}
                            </div> : ''}

                            {this.state.View === 'characters' ? <div>
                                <h2 className='c-title__subTitle2'>Personagens</h2>
                                <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' gap='18px' >
                                    {this.state.ViewData.map((character) => (
                                        <CardCharacter
                                            key={character.character.mal_id}
                                            ft={character.character.images.jpg.image_url}
                                            name={character.character.name}
                                            role={character.role}
                                        />
                                    ))}
                                </FlexContainer>
                            </div> : ''}

                            {this.state.View === 'reviews' ? <div>
                                <h2 className='c-title__subTitle2'>Reviews</h2>
                                {this.state.ViewData.map((review) => (
                                    <p>review = {review.review}</p>
                                ))}
                            </div> : ''}

                            {this.state.View === 'staff' ? <div>
                                <h2 className='c-title__subTitle2'>Produção</h2>
                                <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' gap='18px' >
                                    {this.state.ViewData.map((staff) => (
                                        <CardPerson
                                            key={staff.person.mal_id}
                                            ft={staff.person.images.jpg.image_url}
                                            name={staff.person.name}
                                            url={staff.person.url}
                                            positions={staff.positions}
                                        />
                                    ))}
                                </FlexContainer>
                            </div> : ''}
                        </section>
                    </Main>
                </>
            );
        } else if (this.state.status === 'loading') {
            return (
                <Main>
                    <p>loading...</p>
                </Main>
            );
        } else if (this.state.status === 'error') {
            return (
                <Main>
                    <FlexContainer display='flex' size='100%' wrap='wrap' justify='center'>
                        <FlexContainer size='374px' display='flex' wrap='wrap' justify='center'>
                            <img className='c-errorTohru' src={tohruSad} alt='img' />
                            <div className='c-errorBox' >
                                <h1>{this.state.errorCode}</h1>
                                <p>{this.state.statusText}</p>
                            </div>
                            <p className='c-errorText'>por favor cheque a url: <a href={'https://anitory.netlify.app/'}>https://anitory.netlify.app/</a> </p>
                        </FlexContainer>
                    </FlexContainer>
                </Main>
            );
        }
    }
}

export default Anime;

