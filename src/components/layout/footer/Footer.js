import { Container } from "../../../containers/Container";
import NavBar from "../../generals/navbar/NavBar";
import IMGmalLogo from "../../../assets/images/MyAnimeList.png";
import IMGtohru from "../../../assets/images/tohru.png";
import { Text } from "../../generals/text/Text";
import { FooterBlackAreaCSS, FooterMalIMGCSS, FooterRedAreaCSS, FooterTohruIMGCSS } from "./Footer.styles";

function Footer({ }) {
    var NavBarList = [
        { name: 'MyAnimeList', href: 'https://myanimelist.net/' },
        { name: 'Jikan', href: 'https://jikan.moe/' },
        { name: 'JikanAPI', href: 'https://docs.api.jikan.moe/' }
    ];

    return (
        <footer>
            <div className={FooterRedAreaCSS()}>
                <Container css={{ layout: 1200, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                    <img className={FooterMalIMGCSS()} src={IMGmalLogo} alt="" />
                    <NavBar navList={NavBarList} normalAnchor white />
                </Container>
            </div>
            <div className={FooterBlackAreaCSS()}>
                <Container css={{ layout: 1200, }}>
                    <Text color={'white'} size={'11'}>Anitory © 2022</Text>
                </Container>
            </div>
            <Container css={{ layout: 1200, display: 'flex', justifyContent: 'right', marginTop: -224, }}>
                <img className={FooterTohruIMGCSS()} src={IMGtohru} alt="" />
            </Container>
        </footer>
    );
}

export default Footer;