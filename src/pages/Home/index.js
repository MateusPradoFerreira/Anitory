import useSearchStore from "../../store/useSearchStore";
import { Main } from "../../components/layout/main/Main";
import Banner from "../../components/generals/banner/Banner";
import BannerImg from "../../assets/images/Banner.jpg";
import Area from "../../containers/area/Area";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Content from "./content/Content";

function Home() {
  const clear = useSearchStore(state => state.clear);
  clear();

  return (
    <>
      <Banner img={BannerImg} css={{ '@mobile': { height: 150, } }} />
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