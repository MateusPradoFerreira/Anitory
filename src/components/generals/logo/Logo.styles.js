import { css } from '../../../services/stitchesConfig';

export const LogoAnchorCSS = css({
  color: '$red300',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: 35,
  textDecoration: 'none',
  outline: 'none',

  img: {
    width: 100
  },

  '&:focus-visible': {
    border: 'none',
    color: '$red700',
  },
});
