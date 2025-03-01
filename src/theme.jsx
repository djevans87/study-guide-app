import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#257180', // Teal
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#FD8B51', // Bright Orange
          contrastText: '#ffffff',
        },
        background: {
          default: '#F2E5BF', // Light Beige
          paper: '#ffffff',
          secondary:'#f8f4e3'// White for cards and papers
        },
        text: {
          primary: '#212121', // Dark grey for primary text
          secondary: '#757575', // Medium grey for secondary text
        },
        warning: {
          main: '#CB6040', // Brick Red
          contrastText: '#ffffff',
        },
      },
      typography: {
        fontFamily: 'Tektur Condensed,Roboto, sans-serif',
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1.3,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.5,
        },
        button: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },

      spacing: 8, // Base spacing unit for responsive sizing
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '40px', // Sharp corners for a flat design
              padding: '10px 20px',
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: '80px', // Sharp corners for cards
              boxShadow: 'none', // No shadow for a flat design
              border: '1px solid #e0e0e0', // Subtle border for separation
            },
          },
        },
      }
          });



    export default theme; 