import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider calue={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">

          </main>
        </div>
      </ThemeProvider>      
    </ColorModeContext.Provider>
  );
}

export default App;
