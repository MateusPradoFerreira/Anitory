import { Main } from "../../components/layout/main/Main";
import BannerImg from "../../assets/images/Banner.png";
import Area from "../../containers/area/Area";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Content from "./content/Content";
import useAnimeStore from "../../store/useAnimeStore";
import useMangaStore from "../../store/useAnimeStore";
import { Banner } from "./styles";

function Home() {
  document.title = "Anitory";
  const clear1 = useAnimeStore(state => state.clear);
  const clear2 = useMangaStore(state => state.clear);
  clear1();
  clear2();

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