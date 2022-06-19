import { amber, grey } from '@mui/material/colors'

export const myTheme = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[700]
          },
          background: {
            default: amber[50],
            paper: amber[200]
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#3f51b5',
            contrastText: 'rgba(255,255,255,0.87)'
          },
          secondary: {
            main: '#a36147'
          },
          divider: '#424242',
          info: {
            main: '#2196f3'
          },
          error: {
            main: '#f44336'
          },
          background: {
            default: '#121212',
            paper: '#3f51b5'
          }
        }),
    typography: {
      fontFamily: 'M PLUS Rounded 1c'
    }
  }
})
