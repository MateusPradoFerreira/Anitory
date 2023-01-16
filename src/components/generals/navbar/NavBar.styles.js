import { styled, css } from '../../../services/stitchesConfig';

export const NavBarlistCSS = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  gap: 45,

  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15
      }
    }
  }
});

export const navBarAnchorCSS = css({
  textDecoration: 'none',
  fontWeight: 400,
  fontSize: 13,
  color: '$black',

  '&:hover': {
    color: '$red300',
  },
});

export const navBarAnchorWhiteCSS = css({
  textDecoration: 'none',
  fontWeight: 400,
  fontSize: 13,
  color: 'White',

  '&:hover': {
    textDecoration: 'underline',
  },
});
