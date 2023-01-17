import { Main } from "../../../components/layout/main/Main";
import { useParams } from 'react-router-dom';
import useAnimeQuery from '../../../hooks/useAnimeQuery';
import formatNameList from '../../../utils/formatNameList';
import Banner from "../../../components/generals/banner/Banner";
import { Hidder } from "../../../components/generals/hidder/Hidder";
import Area from "../../../containers/area/Area";
import IndividualAnimeSidebar from "./IndividualAnimeSidebar/IndividualAnimeSidebar";
import IndividualAnimePath from "./IndividualAnimePath/IndividualAnimePath";
import IndividualAnimeMenu from "./IndividualAnimeMenu/IndividualAnimeMenu";
import IndividualAnimeContent from "./IndividualAnimeContent/IndividualAnimeContent";
import { Container } from "../../../containers/Container";
import Video from "../../../components/cards/video/Video";
import { Title } from "../../../components/generals/title/Title";
import { Thumbnail } from "../../../components/generals/thumbnail/Thumbnail";

function IndividualAnime() {
  const { id } = useParams();

  const { data: Data, isLoading, isError } = useAnimeQuery(`/anime/${id}`);

  function GoToTrailer() {
    window.open(data.trailer.url, "_blank")
  }

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
  var genres = formatNameList(data?.genres);
  var themes = formatNameList(data?.themes);

  return (
    <>
      <Hidder border boxShadow>
        <Banner img={data.images.jpg.large_image_url} dark blur top />
      </Hidder>
      <Main anime>
        <Area name={'sidebar'}>
          <Container css={{ '@iPad': { display: 'flex', flexDirection: 'column', alignItems: 'center' } }}>
            <Container css={{ position: 'absolute', }}>
              <Thumbnail radii src={data.images.jpg.large_image_url} alt={data.title} />
            </Container>

            {data.trailer.url !== null && (
              <Container css={{ paddingTop: 450 }}>
                <Title css={{ '@mobile': { textAlign: 'center' } }}>Watch The Trailer Now</Title>
                <Video
                  radii
                  thumb={data.trailer.images.large_image_url}
                  css={{ marginTop: 15, }}
                  onClick={GoToTrailer} />
              </Container>
            )}

            <IndividualAnimeSidebar data={data} genres={genres} themes={themes} />
          </Container>

        </Area>
        <Area name={'content'}>

          <IndividualAnimeContent data={data} genres={genres} />
          <IndividualAnimeMenu />

          <Container css={{ minHeight: 200, }}>
            <IndividualAnimePath />
          </Container>
        </Area>
      </Main>
    </>
  );
}

export default IndividualAnime;
