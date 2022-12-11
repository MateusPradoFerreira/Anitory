import { Component } from 'react';

// Img
import tohruSad from '../img/tohruSad.png';
import SVGsearch from '../Svg/All/broken/search-normal-1.svg';

// Components
import Main from '../components/Main';
import FlexContainer from '../components/FlexContainer';
import CardAnime from '../components/CardAnime';

// Axios
import Api from '../api/Api';

// Router
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getError = this.getError.bind(this);
        this.buscar = this.buscar.bind(this);
    }

    state = {
        status: 'loading',
        Animes: {}
    }

    getError(error) {
        console.log(error);
        this.setState({
            status: 'error',
            errorCode: error.response.status,
            statusText: error.response.statusText
        })
    }

    async componentDidMount() {

        window.scroll(0, 0);
        // Api
        const responseSeason = await Api.get('/seasons/now?limit=24&type=anime')
            .catch((error) => this.getError(error));

        if (this.state.status === 'loading') {
            this.setState({
                status: 'success',
                Animes: responseSeason.data.data
            })
        }
    }

    async buscar(e, page) {
        e.preventDefault();
        var busca = document.getElementById('input').value;
        var url = '/seasons/now?limit=24&type=anime&sfw=true';
        // Api
        if (busca !== '') {
            url = '/anime?limit=24&sfw=true&q=' + busca + '&page=' + page;
        }
        const reponse = await Api.get(url)
            .catch((error) => this.getError(error));

        this.setState({
            status: 'success',
            Animes: reponse.data.data
        });
    }

    teste() {

    }

    render() {
        if (this.state.status === 'success') {
            return (
                <Main compClass='__search'>
                    <section className='l-filter'>
                        <form>
                            <div className='c-input'>
                                <input type='text' id='input' placeholder='Busque pelos seus animes favoritos' />
                                <button type='submit' onClick={(e) => this.buscar(e, 1)}>
                                    <img src={SVGsearch} alt='ssv' />
                                </button>
                            </div>
                        </form>
                    </section>
                    {this.state.Animes.length == 0 ? <section className='l-sessions' >Sem resultados para a sua busca!</section> : ''}
                    <section className='l-sessions' >
                        <FlexContainer display='flex' size='100%' wrap='wrap' justify='space-between' height='80vh'>
                            {this.state.Animes.map((anime) => (
                                <CardAnime
                                    key={anime.title}
                                    id={anime.mal_id}
                                    capa={anime.images.jpg.image_url}
                                    name={anime.title}
                                    genres={anime.genres}
                                />
                            ))}
                        </FlexContainer>
                    </section>
                    <section className='l-latBar' >

                    </section>
                </Main>
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
