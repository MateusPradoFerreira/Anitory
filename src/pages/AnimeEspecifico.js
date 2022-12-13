import { Component } from 'react';
import { Link } from 'react-router-dom';

// Img
import tohruSad from '../img/tohruSad.png';

// Components
import Main from '../components/layouts/Main';
import FlexContainer from '../containers/FlexContainer';
import Banner from '../components/Banner';

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
            const responseView = await this.getFetch('/anime/' + response.data.data.mal_id + '/' + this.state.View, {});

            if (this.state.status === 'loading') {
                this.setState({
                    status: 'success',
                    Anime: response.data.data,
                    View: 'episodes',
                    ViewData: responseView.data.data,
                    genres: this.concatenarGeneros(response.data.data.genres)
                });
            };

        } else {

            const response = await this.getFetch('/anime/' + id, {});
            const responseView = await this.getFetch('/anime/' + id + '/' + this.state.View, {});

            if (this.state.status === 'loading') {
                this.setState({
                    status: 'success',
                    Anime: response.data.data,
                    View: 'episodes',
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

        this.setState({
            status: 'success',
            Anime: this.state.Anime,
            View: view,
            ViewData: responseView.data.data,
            genres: this.state.genres
        });
    }

    render() {
        if (this.state.status === 'success') {
            return (
                <>
                    <Banner img={this.state.Anime.images.jpg.large_image_url} />
                    <Main compClass='__anime' >
                        <section className='l-latBar' >
                            <img className='c-animeFolder' src={this.state.Anime.images.jpg.large_image_url} alt='img' />
                        </section>
                        <section className='l-sessions' >
                            <>
                                <div className='c-animeHeader' >
                                    <FlexContainer size='100%' justify='space-between' display='flex'>
                                        <div>
                                            <h1 className='c-title__animeName' >{this.state.Anime.title}</h1>
                                            <p className='c-text__generos' >{this.state.genres}</p>
                                        </div>
                                    </FlexContainer>
                                </div>
                                <div className='c-animeTitles' >
                                    <FlexContainer size='100%' justify='space-between' display='flex'>
                                        <p className='c-text__titles' >{'Anitory > Anime > ' + this.state.Anime.title}</p>
                                        <p className='c-text__year' >{this.state.Anime.year !== null ? this.state.Anime.year : ''}</p>
                                    </FlexContainer>
                                </div>
                                <h2 className='c-title__subTitle'>Sinopse</h2>
                                <p className='c-text__sinopse'>{this.state.Anime.synopsis}</p>
                            </>

                            <div>
                                <button type='button' onClick={() => this.setView('episodes')} >episodes</button> <br />
                                <button type='button' onClick={() => this.setView('characters')} >characters</button> <br />
                                <button type='button' onClick={() => this.setView('reviews')} >reviews</button>
                            </div>

                            {this.state.View === 'episodes' ? <div>
                                {this.state.ViewData.map((episode) => (
                                    <p>episode = {episode.title}</p>
                                ))}
                            </div> : ''}

                            {this.state.View === 'characters' ? <div>
                                {this.state.ViewData.map((character) => (
                                    <p>character = {character.character.name}</p>
                                ))}
                            </div> : ''}

                            {this.state.View === 'reviews' ? <div>
                                {this.state.ViewData.map((review) => (
                                    <p>review = {review.user.username}</p>
                                ))}
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

