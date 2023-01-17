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

function IndividualAnime() {
  const { id } = useParams();

  const { data: Data, isLoading, isError } = useAnimeQuery(`/anime/${id}`);

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
          <IndividualAnimeSidebar data={data} genres={genres} themes={themes} />
        </Area>
        <Area name={'content'}>

          <IndividualAnimeContent data={data} genres={genres} />
          <IndividualAnimeMenu />
          <IndividualAnimePath />

        </Area>
      </Main>
    </>
  );
}

export default IndividualAnime;
