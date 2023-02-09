import Banner from "../../components/generals/banner/Banner";
import { Main } from "../../components/layout/main/Main";
import BannerImg from "../../assets/images/black and white chainsaw man banner.jpg";
import { Button } from "../../components/generals/button/Buttom";
import { Container } from "../../containers/Container";
import { useNavigate } from "react-router-dom";
import { Description, Heading, CreditsContainer, CreditsSection, CreditAnchor, CreditsHeading, Icon, ProjectsContainer, Project, ProjectTitle, ProjectThumb, ProjectDescription } from "./styles";
import IMGpoketex from "../../assets/images/pj/poketex.png";
import IMGbookscolection from "../../assets/images/pj/bookscolection.png";
import IMGallinone from "../../assets/images/pj/allinone.png";
import IMGgame from "../../assets/images/pj/game.png";
import IMGfirewatchfanpage from "../../assets/images/pj/firewatchfanpage.png";
import IMGpokedex from "../../assets/images/pj/pokedex.png";


function About() {
    const navigate = useNavigate();

    return (
        <>
            <Main css={{ minHeight: 'auto', }}>
                <Heading>ABOUT ANITORY</Heading>
                <Description>
                    A website created by Mateus do Prado Ferreira, aimed solely and exclusively at React.js studies.
                    I do not claim any rights over the images and icons used.
                    This project uses <a href="https://jikan.moe/">Jikan</a> FREE API.
                    All credits will be listed below.
                </Description>
                <Container css={{ margin: '0 auto', width: 'fit-content' }}>
                    <Button
                        radii
                        css={{ width: 240, marginBottom: 100, marginTop: 45, }}
                        onClick={() => navigate('/animes')}
                    >
                        GET STARTED
                    </Button>
                </Container>
            </Main>
            <Banner img={BannerImg} css={{ '@mobile': { height: 150, } }} />
            <Main css={{ minHeight: 'auto', marginTop: 30, }}>
                <Heading>credits</Heading>

                <CreditsContainer>
                    <CreditsSection>
                        <CreditsHeading>images & icons</CreditsHeading>
                        <CreditAnchor href="https://iconsax.io/">
                            <Icon /> <span>Iconsax</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://iconify.design/">
                            <Icon /> <span>Iconify</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://react-icons.github.io/react-icons">
                            <Icon /> <span>React Icons</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://www.flaticon.com/br/">
                            <Icon /> <span>Flaticon</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://www.deviantart.com/jejesz777">
                            <Icon /> <span>JEJESZ777's</span>
                        </CreditAnchor>
                    </CreditsSection>
                    <CreditsSection>
                        <CreditsHeading>used Tools</CreditsHeading>
                        <CreditAnchor href="https://pt-br.reactjs.org/">
                            <Icon /> <span>React.js</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://react-query-v3.tanstack.com/">
                            <Icon /> <span>React Query</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://zustand-demo.pmnd.rs/">
                            <Icon /> <span>Zustand</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://stitches.dev/">
                            <Icon /> <span>Stitches</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://axios-http.com/ptbr/docs/intro">
                            <Icon /> <span>Axios</span>
                        </CreditAnchor>
                    </CreditsSection>
                    <CreditsSection>
                        <CreditsHeading>API</CreditsHeading>
                        <CreditAnchor href="https://jikan.moe/">
                            <Icon /> <span>Jikan.moe</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://docs.api.jikan.moe/">
                            <Icon /> <span>Jikan.moe Docs</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://www.patreon.com/jikan">
                            <Icon /> <span>Jikan.moe Patreon</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://jikan.moe/faqs">
                            <Icon /> <span>Jikan.moe FAQs</span>
                        </CreditAnchor>
                        <CreditAnchor href="https://myanimelist.net/">
                            <Icon /> <span>MyAnimeList</span>
                        </CreditAnchor>
                    </CreditsSection>
                </CreditsContainer>

                <Heading>other projects</Heading>

                <ProjectsContainer>
                    <Project href="https://poketex.netlify.app/">
                        <ProjectTitle>Poketex</ProjectTitle>
                        <ProjectThumb src={IMGpoketex} alt="" />
                        <ProjectDescription>Custom pokedex that uses the pokeapi to search for pokemons</ProjectDescription>
                    </Project>
                    <Project href="https://bookscolection.000webhostapp.com/index.php">
                        <ProjectTitle>books colection</ProjectTitle>
                        <ProjectThumb src={IMGbookscolection} alt="" />
                        <ProjectDescription>website dedicated to the registration and exchange of books between users</ProjectDescription>
                    </Project>
                    <Project href="https://allinonewb.netlify.app/">
                        <ProjectTitle>allinone</ProjectTitle>
                        <ProjectThumb src={IMGallinone} alt="" />
                        <ProjectDescription>Website that uses the DummyJSON api to simulate a complete marketplace </ProjectDescription>
                    </Project>
                    <Project href="https://mateusfightgame.netlify.app/">
                        <ProjectTitle>fighting game</ProjectTitle>
                        <ProjectThumb src={IMGgame} alt="" />
                        <ProjectDescription>Custom pokedex that uses the pokeapi to search for pokemons</ProjectDescription>
                    </Project>
                    <Project href="https://firewatchfanpage.netlify.app/">
                        <ProjectTitle>firewatch fanpage</ProjectTitle>
                        <ProjectThumb src={IMGfirewatchfanpage} alt="" />
                        <ProjectDescription>Custom pokedex that uses the pokeapi to search for pokemons</ProjectDescription>
                    </Project>
                    <Project href="https://www.figma.com/file/d0FiCtgs0LmPgccKRyYo0x/Pokedex?node-id=0%3A1&t=WkkHdTSOJuFrxxMO-0">
                        <ProjectTitle>pokedex</ProjectTitle>
                        <ProjectThumb src={IMGpokedex} alt="" />
                        <ProjectDescription>Custom pokedex that uses the pokeapi to search for pokemons</ProjectDescription>
                    </Project>
                </ProjectsContainer>
            </Main>
        </>
    );
}

export default About;