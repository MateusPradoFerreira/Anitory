import Banner from "../../components/generals/banner/Banner";
import { Main } from "../../components/layout/main/Main";
import BannerImg from "../../assets/images/black and white chainsaw man banner.jpg";
import { Button } from "../../components/generals/button/Buttom";
import { Container } from "../../containers/Container";
import { useNavigate } from "react-router-dom";
import { Description, Heading, CreditsContainer, CreditsSection, CreditAnchor, CreditsHeading, Icon } from "./styles";

function About() {
    const navigate = useNavigate();

    return (
        <>
            <Main css={{ minHeight: 'auto', }}>
                <Heading>ABOUT ANITORY</Heading>
                <Description>
                    A website created by Mateus do Prado Ferreira, aimed solely and exclusively at React.js studies.
                    I do not claim any rights over the images and icons used.
                    This project uses Jikan FREE API.
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
            </Main>
        </>
    );
}

export default About;