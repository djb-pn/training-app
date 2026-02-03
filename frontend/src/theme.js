import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#670000', // Maroon
    },
    secondary: {
      main: '#595959', // Gray
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export default theme;