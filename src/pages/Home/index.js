import { Main } from "../../components/layout/main/Main";
import Banner from "../../components/generals/banner/Banner";
import BannerImg from "../../assets/images/Banner.png";
import Area from "../../containers/area/Area";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Content from "./content/Content";
import useAnimeStore from "../../store/useAnimeStore";

function Home() {
  const clear = useAnimeStore(state => state.clear);
  clear();

  return (
    <>
      <Banner noShadow img={BannerImg} css={{ '@mobile': { height: 150, } }} />
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