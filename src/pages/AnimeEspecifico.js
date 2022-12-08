import { Component } from 'react';

// Components
import Main from '../components/Main';

// Axios
import Api from '../api/Api';

class Anime extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {
        window.scroll(0, 0);
        var urlAtual = window.location.href;
        var urlClass = new URL(urlAtual);
        var animeID = urlClass.searchParams.get("animeID");

        if (animeID === null) {
            window.location.href = window.location.href.replace(window.location.pathname, '');
        } else {
            const response = await Api.get('/anime/' + animeID)
                .catch(function (error) {
                    console.log(error)
                });

            this.setState({
                data: response.data.data
            })
        };
    }

    state = {
        data: { title: 'anime' }
    }

    render() {
        return (
            <Main>
                <p>{this.state.data.title}</p>
            </Main>
        );
    }
}

export default Anime;