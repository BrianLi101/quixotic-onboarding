import { createTheme } from '@mui/material';

import { QUIXOTIC_RED } from '../resources/Constants';

export const muiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1em',
          borderRadius: 10,
        },
      },
    },
  },
  palette: {
    primary: {
      main: QUIXOTIC_RED,
    },
    secondary: {
      main: 'rgb(239,101,98)',
    },
  },
  typography: {
    fontFamily: ['Metropolis', 'Helvetica', ' sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
});
