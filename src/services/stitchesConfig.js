import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$Poppins",
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: '#f5f5f5',
  },

  '::-webkit-scrollbar': {
    width: 10,
    backgroundColor: '#f5f5f5',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#f44336',
    borderRadius: 0,
  }
});

export const { css, styled } = createStitches({
  theme: {
    colors: {
      yellow200: "#ffe15d",
      yellow600: "#f49d1a",
      red300: "#f44336",
      red500: "#dc3535",
      red700: "#b71515",
      magenta500: "#d81b60",
      magenta800: "#880e4f",
      grey50: "#f5f5f5",
      grey100: "#F0F0F0",
      grey400: "#a7a7a7",
      grey700: "#757575",
      grey800: "#343434",
      grey900: "#212121",
      black: "#1f1f1f",
    },
    fonts: {
      Poppins: "Poppins, sans-serif",
    },
  },
  utils: {
    layout: (value) => ({
      width: "100%",
      maxWidth: value,
      margin: "0 auto",
    }),
  },
  media: {
    'mobile': '(max-width: 640px)',
    'tablet': '(max-width: 1200px)',
    'iPad': '(max-width: 950px)',
    'desktop': '(max-width: 1440px)',
  },
});
