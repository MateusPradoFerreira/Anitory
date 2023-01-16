import { BannerCSS } from './Banner.styles';

function Banner({ img, dark, blur }) {
  return <BannerCSS dark={dark} blur={blur} css={{ backgroundImage: `url('${img}')` }}></BannerCSS>;
}

export default Banner;
