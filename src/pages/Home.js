import { Component } from 'react';

// Img
import tohruSad from '../img/tohruSad.png';

// Svg
import SVGAdd from '../Svg/All/broken/add.svg'

// Components
import Main from '../components/Main';
import Slider from '../components/Slider';
import FlexContainer from '../components/FlexContainer';
import CardAnime from '../components/CardAnime';
import Button4x4 from '../components/Button4x4';

// Axios
import Api from '../api/Api';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getError = this.getError.bind(this);
    }

    state = {
        status: 'loading',
        Animes: []
    }

    getError(error) {
        this.setState({
            status: 'error',
            errorCode: error.response.status,
            statusText: error.response.statusText
        })
    }

    async componentDidMount() {
        // Api
        const responseSeason = await Api.get('/seasons/now?limit=8&type=anime')
            .catch((error) => this.getError(error));
        const responseTopAni = await Api.get('/top/anime?limit=16&type=anime')
            .catch((error) => this.getError(error));

        if (this.state.status === 'loading') {
            var Animes = [
                {
                    title: 'Animes de Temporada',
                    pages: responseSeason.data.pagination.last_visible_page,
                    total: responseSeason.data.pagination.items.total,
                    animes: responseSeason.data.data
                },
                {
                    title: 'Animes mais assistidos',
                    pages: responseTopAni.data.pagination.last_visible_page,
                    total: responseTopAni.data.pagination.items.total,
                    animes: responseTopAni.data.data
                }
            ];

            this.setState({
                status: 'success',
                Animes: Animes
            })
        }

    }

    teste() {

    }

    render() {
        if (this.state.status === 'success') {
            return (
                <>
                    <Slider />
                    <Main compClass='__home'>
                        <div className='l-sessions' >
                            {this.state.Animes.map((session) => (
                                <section key={session.title}>
                                    <FlexContainer size='100%' display='flex' justify='space-between'>
                                        <h1 className='c-title__session'>{session.title}</h1>
                                        <Button4x4 activeFunction={this.teste} icon={SVGAdd} />
                                    </FlexContainer>
                                    <FlexContainer display='flex' size='100%' wrap='wrap' justify='space-between'>
                                        {session.animes.map((anime) => (
                                            <CardAnime
                                                key={anime.title}
                                                animeID={anime.mal_id}
                                                capa={anime.images.jpg.image_url}
                                                name={anime.title}
                                                genres={anime.genres}
                                            />
                                        ))}
                                    </FlexContainer> <br />
                                </section>
                            ))}
                        </div>
                        <div className='l-latBar' >

                        </div>
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
                            <p className='c-errorText'>por favor cheque a url: <Link to={'/'}>http://Anitory.com</Link> </p>
                        </FlexContainer>
                    </FlexContainer>
                </Main>
            );
        }
    }
}

export default Home;
