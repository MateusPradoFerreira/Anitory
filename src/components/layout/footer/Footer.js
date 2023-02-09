import { Container } from "../../../containers/Container";
import IMGtohru from "../../../assets/images/tohru.png";
import { Text } from "../../generals/text/Text";
import { FooterBlackAreaCSS, FooterRedAreaCSS, FooterTohruIMGCSS, FooterSection, SectionTitle, SectionContent, SectionAnchor, Icons, Icon, IconCSS } from "./Footer.styles";
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

function Footer({ }) {
    var NavBarList = [
        { name: 'MyAnimeList', href: 'https://myanimelist.net/' },
        { name: 'Jikan', href: 'https://jikan.moe/' },
        { name: 'JikanAPI', href: 'https://docs.api.jikan.moe/' }
    ];

    return (
        <footer>
            <div className={FooterRedAreaCSS()}>
                <Container css={{ layout: 1200, display: 'flex', gap: 60, paddingTop: 30, height: '100%', '@mobile': { flexDirection: 'column' }, '@tablet': { padding: '30px 20px 20px 20px', gap: 15 } }}>
                    <FooterSection>
                        <SectionTitle>ABOUT</SectionTitle>
                        <SectionContent>
                            Anitory is a site dedicated to react.js studies, which uses the Jikan.moe API as a 'search engine' for various anime and manga. If you like my work, consider supporting me on social media.
                        </SectionContent>
                    </FooterSection>
                    <FooterSection>
                        <SectionTitle>CONTACT</SectionTitle>
                        <SectionContent>mateuspradoferreira@gmail.com</SectionContent>
                        <Icons>
                            <Icon href="https://www.instagram.com/mateuspratu/">
                                <BsInstagram className={IconCSS()} />
                            </Icon>
                            <Icon href="https://www.linkedin.com/in/mateus-do-prado-8820a6257/">
                                <FaLinkedinIn className={IconCSS()} />
                            </Icon>
                            <Icon href="https://github.com/MateusPratu">
                                <BsGithub className={IconCSS()} />
                            </Icon>
                            <Icon href="https://www.figma.com/file/wdXZEXTQ1ePnAS7ifJL7c7/Anitory?node-id=0%3A1&t=qDPBCF6zi0enYr8g-0">
                                <FiFigma className={IconCSS()} />
                            </Icon>
                        </Icons>
                    </FooterSection>
                    <FooterSection>
                        <SectionTitle>LINKS</SectionTitle>
                        <SectionContent>
                            <SectionAnchor href="https://anitory.netlify.app/">HOME</SectionAnchor>
                            <SectionAnchor href="https://anitory.netlify.app/animes">ANIMES</SectionAnchor>
                            <SectionAnchor href="https://anitory.netlify.app/mangas">MANGAS</SectionAnchor>
                            <SectionAnchor href="https://anitory.netlify.app/about">ABOUT</SectionAnchor>
                        </SectionContent>
                    </FooterSection>
                </Container>
            </div>
            <div className={FooterBlackAreaCSS()}>
                <Container css={{ layout: 1200, }}>
                    <Text color={'white'} size={'11'}>Anitory © 2022</Text>
                </Container>
            </div>
            <Container css={{ layout: 1200, display: 'flex', justifyContent: 'right', marginTop: -288, }}>
                <img className={FooterTohruIMGCSS()} src={IMGtohru} alt="" />
            </Container>
        </footer >
    );
}

export default Footer;