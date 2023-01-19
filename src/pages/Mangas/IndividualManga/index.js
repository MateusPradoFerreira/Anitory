import { Main } from "../../../components/layout/main/Main";
import { useParams } from 'react-router-dom';
import useAnimeQuery from '../../../hooks/useAnimeQuery';
import formatNameList from '../../../utils/formatNameList';
import Banner from "../../../components/generals/banner/Banner";
import { Hidder } from "../../../components/generals/hidder/Hidder";
import Area from "../../../containers/area/Area";
import IndividualMangaSidebar from "./IndividualMangaSidebar/IndividualMangaSidebar";
import IndividualMangaPath from "./IndividualMangaPath/IndividualMangaPath";
import IndividualMangaMenu from "./IndividualMangaMenu/IndividualMangaMenu";
import IndividualMangaContent from "./IndividualMangaContent/IndividualMangaContent";
import { Container } from "../../../containers/Container";
import { Thumbnail } from "../../../components/generals/thumbnail/Thumbnail";

function IndividualManga() {
  const { id } = useParams();

  const { data: Data, isLoading, isError } = useAnimeQuery(`/manga/${id}`);

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
      <Main individualAnimeManga>
        <Area name={'sidebar'}>
          <Container css={{ '@iPad': { display: 'flex', flexDirection: 'column', alignItems: 'center' } }}>
            <Container css={{ position: 'absolute', }}>
              <Thumbnail radii src={data.images.jpg.large_image_url} alt={data.title} />
            </Container>

            <Container css={{ paddingTop: 430 }}>
              <IndividualMangaSidebar data={data} genres={genres} themes={themes} />
            </Container>

          </Container>

        </Area>
        <Area name={'content'}>

          <IndividualMangaContent data={data} genres={genres} />
          <IndividualMangaMenu />

          <Container css={{ minHeight: 200, }}>
            <IndividualMangaPath />
          </Container>
        </Area>
      </Main>
    </>
  );
}

export default IndividualManga;
