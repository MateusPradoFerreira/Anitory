import { Component } from 'react';

// Img
import tohruSad from '../img/tohruSad.png';

// Components
import Main from '../components/layouts/Main';
import FlexContainer from '../containers/FlexContainer';
import CardAnime from '../components/CardAnime';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

// Axios
import Api from '../api/Api';

// Router
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getError = this.getError.bind(this);
        this.getFetch = this.getFetch.bind(this);
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
        var search = urlClass.searchParams.get("search");
        this.buscar(false, search === null ? '' : search, 1);
    }

    async buscar(event, search, page) {
        window.scroll(0, 0);
        if (event !== false) { event.preventDefault(); }

        var urlClass = new URL(window.location.href);
        var temp = urlClass.searchParams.get("temp");

        var url = search !== '' ? '/anime' : '/top/anime';
        if ( temp !== null && search === '') {
            var url = '/' + temp;
        }

        // Api
        const response = await this.getFetch(url , {
            limit: 24,
            type: 'anime',
            sfw: true,
            order_by: 'end_date',
            q: search,
            page: page
        });

        this.setState({
            status: 'success',
            Search: search,
            Animes: response.data.data,
            Pagination: response.data.pagination
        });
    }

    render() {
        if (this.state.status === 'success') {
            return (
                <Main compClass='__search'>
                    <section className='l-filter'>
                        <SearchBar buscar={this.buscar} />
                    </section>
                    {this.state.Animes.length === 0 ? <section className='l-sessions' >Sem resultados para a sua busca!</section> : ''}
                    <section className='l-sessions' >
                        <FlexContainer display='flex' size='100%' wrap='wrap' justify='left' height='80vh' gap='15px'>
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
                        <Pagination
                            totalCount={this.state.Pagination.items.total}
                            pageSize={this.state.Pagination.items.per_page}
                            onPageChange={this.buscar}
                            currentPage={this.state.Pagination.current_page}
                            siblingCount={7}
                            search={this.state.Search}
                        />
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
