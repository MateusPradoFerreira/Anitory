import { BannerCSS } from './Banner.styles';

function Banner({ img, dark, blur, css }) {
  return <BannerCSS dark={dark} blur={blur} css={{ backgroundImage: `url('${img}')`, ...css }}></BannerCSS>;
}

export default Banner;
