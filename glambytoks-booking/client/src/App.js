import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styled from 'styled-components';
import HomePage from './pages/HomePage';  // Adjusted import
import BookingPage from './pages/BookingPage'; // Adjusted import
import ServicesPage from './pages/ServicesPage'; // Adjusted import
import Portfolio from './components/Portfolio'; // Adjusted import
import Navigation from './components/Navigation'; // Adjusted import
import About from './components/About'; // Adjusted import for About
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Pink
      light: '#FFB6C1',
      dark: '#DB7093',
    },
    secondary: {
      main: '#4A154B', // Purple
      light: '#6B1F6B',
      dark: '#2D0D2D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
        },
      },
    },
  },
});

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
`;

const Header = styled.header`
  background-color: ${props => props.theme.palette.background.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppContainer>
            <Header>
              <Navigation />
            </Header>
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} /> {/* Corrected path */}
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
