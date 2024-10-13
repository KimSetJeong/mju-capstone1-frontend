import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
