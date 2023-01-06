import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import Team from './components/pages/team';
import Contacts from './components/pages/contacts';
import AddUser from './components/pages/user';
import Calendar from './components/pages/calendar';
import FAQ from './components/pages/faq';
import Bar from './components/pages/bar';
import Pie from './components/pages/pie';
import Line from './components/pages/line';
import Geo from './components/pages/geo';
import Invoices from './components/pages/invoices';


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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/user" element={<AddUser />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geo" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>      
    </ColorModeContext.Provider>
  );
}

export default App;
