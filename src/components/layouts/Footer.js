// Components
import Container from "../../containers/Container";
import FlexContainer from "../../containers/FlexContainer";
import NavBar from "../navBar/FooterNavBar";

// img
import Toru from '../../assets/img/toru.png';
import MyAnimeList from '../../assets/img/MyAnimeList.png';

function Footer() {

    var NavBarList = [
        { item: 'MyAnimeList', link: 'https://myanimelist.net/' },
        { item: 'Jikan', link: 'https://jikan.moe/' },
        { item: 'JikanAPI', link: 'https://docs.api.jikan.moe/' }
    ];

    return (
        <footer className="l-footer">
            <div className="c-redBox">
                <Container>
                    <div style={{ width: '100$', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img className="c-mal" src={MyAnimeList} alt="" />
                        <NavBar itensList={NavBarList} />
                    </div>
                </Container>
            </div>
            <div className="c-blackBox">
                <Container>
                    <p className="c-text__copy">Anitory © 2022</p>
                </Container>
            </div>
            <div className="c-toru">
                <img src={Toru} alt="" />
            </div>
        </footer>
    );
}

export default Footer;