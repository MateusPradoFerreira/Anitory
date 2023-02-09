import { Main } from "../../components/layout/main/Main";
import BannerImg from "../../assets/images/Banner.png";
import Area from "../../containers/area/Area";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Content from "./content/Content";
import useAnimeStore from "../../store/useAnimeStore";
import { Banner } from "./styles";

function Home() {
  const clear = useAnimeStore(state => state.clear);
  clear();

  return (
    <>
      <Banner src={BannerImg} alt='Banner' />
      <Main home>
        <Area name={'content'}>
          <Content />
        </Area>
        <Area name={'sidebar'}>
          <Sidebar path={'/top/anime?limit=16'} title={'Most Watched'} />
        </Area>
      </Main>
    </>
  );
}

export default Home;