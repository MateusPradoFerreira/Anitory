import { styled } from '../../../services/stitchesConfig';

export const Button = styled('button', {
  border: 'none',
  cursor: 'pointer',

  variants: {
    style: {
      text: {
        padding: '5px 15px',

        '&:focus-visible': {
          zIndex: '999'
        },
      },
      icon: {
        width: 40,
        height: 40,
        backgroundColor: '$red300',

        '&:active': {
          transform: 'translateY(2px)',
          boxShadow: 'none',
        },

        '& img': {
          marginTop: 5,
          marginLeft: -1,
          width: 20,
          height: 20,
        },

        '&:focus-visible': {
          outline: 'none'
        },
      },
    },
    color: {
      red: {
        backgroundColor: '$red300',
        boxShadow: '0px 2px 0px 0px #b71515',
        color: 'White',

        '&:focus-visible': {
          backgroundColor: '$red500',
          boxShadow: '0px 2px 0px 0px #b71515',
        },
      },
      grey: {
        backgroundColor: '$grey100',
        boxShadow: '0px 2px 0px 0px #a7a7a7',
        color: '$black',

        '&:focus-visible': {
          backgroundColor: '$grey100',
          boxShadow: '0px 2px 0px 0px #a7a7a7',
        },
      },
    },
    radii: {
      true: {
        borderRadius: 10,
      },
      top: {
        borderRadius: '10px 10px 0 0'
      }
    },
  },

  defaultVariants: {
    color: 'red',
    style: 'text',
  },
});
