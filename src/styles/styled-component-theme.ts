import lightTheme from './light-theme';

const mobile = 480;
const tablet = 768;
const desktop = 1024;

export const theme = {
  breakpoints: {
    mobile: `@media screen and (max-width: ${mobile}px)`,
    tablet: `@media screen and (max-width: ${tablet}px)`,
    desktop: `@media screen and (max-width: ${desktop}px)`,
  },
  colors: lightTheme,
};

export type Theme = typeof theme;
