import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#670000', // Verified Maroon
    },
    secondary: {
      main: '#595959', // Verified Gray
    },
    background: {
      default: '#ffffff', // Verified White
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

export default theme;