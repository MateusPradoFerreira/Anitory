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

// Router
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
        console.log(error);
        this.setState({
            status: 'error',
            errorCode: error.response.status,
            statusText: error.response.statusText
        })
    }

    criaSession(title, response) {
        return {
            title: title,
            pages: response.data.pagination.last_visible_page,
            total: response.data.pagination.items.total,
            animes: response.data.data
        }
    }

    async componentDidMount() {

        window.scroll(0, 0);
        // Api
        const responseSeason = await Api.get('/seasons/now?limit=4&type=anime')
            .catch((error) => this.getError(error));
        const responseFilmes = await Api.get('/top/anime?limit=4&type=movie')
            .catch((error) => this.getError(error));
        const responseSS2021 = await Api.get('/seasons/2022/winter?limit=16&type=anime')
            .catch((error) => this.getError(error));

        if (this.state.status === 'loading') {
            var Animes = [
                this.criaSession('Animes de Temporada', responseSeason),
                this.criaSession('Filmes mais assistidos', responseFilmes),
                this.criaSession('Animes condecorados em 2022', responseSS2021)
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
                        <section className='l-sessions' >
                            {this.state.Animes.map((session) => (
                                <div key={session.title}>
                                    <FlexContainer size='100%' display='flex' justify='space-between'>
                                        <h1 className='c-title__session'>{session.title}</h1>
                                        <Button4x4 activeFunction={this.teste} icon={SVGAdd} />
                                    </FlexContainer>
                                    <FlexContainer display='flex' size='100%' wrap='wrap' justify='space-between'>
                                        {session.animes.map((anime) => (
                                            <CardAnime
                                                key={anime.title}
                                                id={anime.mal_id}
                                                capa={anime.images.jpg.image_url}
                                                name={anime.title}
                                                genres={anime.genres}
                                            />
                                        ))}
                                    </FlexContainer> <br />
                                </div>
                            ))}
                        </section>
                        <section className='l-latBar' >

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
                            <p className='c-errorText'>por favor cheque a url: <Link to={'/'}>http://Anitory.com</Link> </p>
                        </FlexContainer>
                    </FlexContainer>
                </Main>
            );
        }
    }
}

export default Home;
