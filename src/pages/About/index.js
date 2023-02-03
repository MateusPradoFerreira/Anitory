import Banner from "../../components/generals/banner/Banner";
import { Main } from "../../components/layout/main/Main";
import { Description, Heading } from "./styles";
import BannerImg from "../../assets/images/black and white chainsaw man banner.jpg";
import { Button } from "../../components/generals/button/Buttom";
import { Container } from "../../containers/Container";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <>
            <Main css={{ minHeight: 'auto', }}>
                <Heading>ABOUT ANITORY</Heading>
                <Description>A website created by Mateus do Prado Ferreira, aimed solely and exclusively at React.js studies. I do not claim any rights over the images and icons used. This project uses Jinkan FREE API. All credits will be listed below.</Description>
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
                <Heading>other projects</Heading>
            </Main>
        </>
    );
}

export default About;