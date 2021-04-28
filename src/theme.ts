import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

// colors
const primary = '#ef0d33';
const secondary = '#2c333f';

// background
const backgroundPaper = '#f0f2f5';
const backgroundDefault = '#e1e1ed';

// text
const textPrimary = '#ef0d33';
const textSecondary = '#475366';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      paper: backgroundPaper,
      default: backgroundDefault,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },

  typography: {
    h1: {
      fontFamily: 'system-ui',
    },
    h2: {
      fontFamily: '"Fondamento", cursive',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default responsiveFontSizes(theme);
