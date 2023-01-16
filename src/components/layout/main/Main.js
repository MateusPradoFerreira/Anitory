import { styled } from "../../../services/stitchesConfig";

export const Main = styled('main', {
  layout: 1200,
  minHeight: '100vh',

  '@tablet': {
    padding: '0 20px',
  },

  variants: {
    home: {
      true: {
        marginTop: 25,
        display: 'grid',
        gridTemplateAreas: 'content sidebar',
        gridTemplateColumns: '845px 1fr',
        gridGap: '20px',

        '@tablet': {
          display: 'block',
        },
      },
    },
    anime: {
      true: {
        marginTop: -200,
        display: 'grid',
        gridTemplateAreas: 'sidebar content',
        gridTemplateColumns: '300px 860px',
        gridGap: '40px',

        '@tablet': {
          display: 'block',
        },

        '@mobile': {
          display: 'block',
        },
      },
    },
  },
})