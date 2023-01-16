import { Main } from "../../components/layout/main/Main";
import { useParams } from 'react-router-dom';
import useAnimeQuery from '../../hooks/useAnimeQuery';
import useSearchStore from '../../store/useSearchStore';
import formatNameList from '../../utils/formatNameList';
import Banner from "../../components/generals/banner/Banner";
import { Hidder } from "../../components/generals/hidder/Hidder";
import Area from "../../containers/area/Area";
import { Container } from "../../containers/Container";
import { Title } from "../../components/generals/title/Title";
import { Text } from "../../components/generals/text/Text";
import { Button } from "../../components/generals/button/Buttom";
import MangaPath from "./MangaPath/MangaPath";
import SidebarManga from "./MangaSidebar/SidebarManga";

function Anime() {
  const params = useParams();
  const mangaID = params['*'];
  const setCurrentMangaPath = useSearchStore(state => state.setCurrentMangaPath);
  const mangaPath = useSearchStore(state => state.currentMangaPath);

  if (mangaPath === '/videos') {
    setCurrentMangaPath('/characters');
  }
  const { data: Data, isLoading, isError } = useAnimeQuery(`/manga/${mangaID}`);

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
  var mangaGenres = formatNameList(data?.genres);
  var mangaThemes = formatNameList(data?.themes);

  return (
    <>
      <Hidder border boxShadow>
        <Banner img={data.images.jpg.large_image_url} dark blur top />
      </Hidder>
      <Main anime>
        <Area name={'sidebar'}>
          <SidebarManga data={data} genres={mangaGenres} themes={mangaThemes} />
        </Area>
        <Area name={'content'}>
          <Container animeheader>
            <Container css={{ maxWidth: 600 }}>
              <Title color={'white'} size={'42'} nowrap fontWeight={'lg'} > {data.title} </Title>
              <Text color={'white'} nowrap css={{ marginTop: 5, }}>{mangaGenres}</Text>
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
            <Button onClick={() => setCurrentMangaPath('/characters')} color={mangaPath === '/characters' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> characters </Button>
            <Button onClick={() => setCurrentMangaPath('/pictures')} color={mangaPath === '/pictures' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> pictures </Button>
            <Button onClick={() => setCurrentMangaPath('/recommendations')} color={mangaPath === '/recommendations' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> recommendations </Button>
            <Button onClick={() => setCurrentMangaPath('/reviews')} color={mangaPath === '/reviews' ? 'red' : 'grey'} radii={'top'} style={'text'} css={{ '@mobile': { borderRadius: 10, marginBottom: 5, } }}> reviews </Button>
          </Container>

          <MangaPath />

        </Area>
      </Main>
    </>
  );
}

export default Anime;
