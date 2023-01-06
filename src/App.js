import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <main className="content">
            <Header />
          </main>
        </div>
      </ThemeProvider>      
    </ColorModeContext.Provider>
  );
}

export default App;
