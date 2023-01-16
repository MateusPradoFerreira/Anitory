import { Main } from "../../components/layout/main/Main";
import { useNavigate, useParams } from 'react-router-dom';
import useAnimeQuery from '../../hooks/useAnimeQuery';
import useSearchStore from '../../store/useSearchStore';
import formatNameList from '../../utils/formatNameList';
import Banner from "../../components/generals/banner/Banner";
import { Hidder } from "../../components/generals/hidder/Hidder";
import Area from "../../containers/area/Area";
import SidebarAnime from "./AnimeSidebar/SidebarAnime";
import { Container } from "../../containers/Container";
import { Title } from "../../components/generals/title/Title";
import { Text } from "../../components/generals/text/Text";
import { Button } from "../../components/generals/button/Buttom";
import AnimePath from "./AnimePath/AnimePath";

function Anime() {
  const params = useParams();
  const animeID = params['*'];
  const setCurrentAnimePath = useSearchStore(state => state.setCurrentAnimePath);
  const animePath = useSearchStore(state => state.currentAnimePath);
  const navigate = useNavigate();

  const { data: Data, isLoading, isError } = useAnimeQuery(`/anime/${animeID}`);

  if (isError || Data?.status) {
    return (
      <Main>error...</Main>
    );
  }

  if (isLoading) {
    return (
      <Main>loading...</Main>
    );
  }

  var data = Data?.data;
  var animeGenres = formatNameList(data?.genres);
  var animeThemes = formatNameList(data?.themes);

  return (
    <>
      <Hidder border boxShadow>
        <Banner img={data.images.jpg.large_image_url} dark blur top />
      </Hidder>
      <Main anime>
        <Area name={'sidebar'}>
          <SidebarAnime data={data} genres={animeGenres} themes={animeThemes} />
        </Area>
        <Area name={'content'}>
          <Container animeheader>
            <Container css={{ maxWidth: 600 }}>
              <Title color={'white'} size={'42'} nowrap fontWeight={'lg'} > {data.title} </Title>
              <Text color={'white'} nowrap css={{ marginTop: 5, }}>{animeGenres}</Text>
            </Container>
          </Container>
          <Container borderBottom css={{ paddingTop: 225, paddingBottom: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text nowrap> Anitory {'>'} Anime {'>'} {data.title} </Text>
            <Text color={'red'} fontWeight={'lg'}> {data.year} </Text>
          </Container>

          <Container>
            <Title css={{ marginTop: 15 }}> Synopsis </Title>
            <Text size={'14'} css={{ marginTop: 15 }}> {data.synopsis} </Text>
          </Container>

          {data.background !== null && (
            <Container>
              <Title css={{ marginTop: 15 }}> Background </Title>
              <Text size={'14'} css={{ marginTop: 15 }}> {data.background} </Text>
            </Container>
          )}

          <Container borderBottom css={{ display: 'flex', marginTop: 30, '@mobile': { flexDirection: 'column', border: 'none' } }}>
            <Button onClick={() => setCurrentAnimePath('/videos')} color={animePath === '/videos' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> videos </Button>
            <Button onClick={() => setCurrentAnimePath('/characters')} color={animePath === '/characters' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> characters </Button>
            <Button onClick={() => setCurrentAnimePath('/pictures')} color={animePath === '/pictures' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> pictures </Button>
            <Button onClick={() => setCurrentAnimePath('/staff')} color={animePath === '/staff' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> staff </Button>
            <Button onClick={() => setCurrentAnimePath('/recommendations')} color={animePath === '/recommendations' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> recommendations </Button>
            <Button onClick={() => setCurrentAnimePath('/reviews')} color={animePath === '/reviews' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> reviews </Button>
          </Container>

          <AnimePath />

        </Area>
      </Main>
    </>
  );
}

export default Anime;
