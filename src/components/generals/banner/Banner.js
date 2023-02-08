import { BannerCSS } from './Banner.styles';

function Banner({ img, dark, blur, css, noShadow }) {
  return <BannerCSS dark={dark} blur={blur} noShadow={noShadow} css={{ backgroundImage: `url('${img}')`, ...css }}></BannerCSS>;
}

export default Banner;
