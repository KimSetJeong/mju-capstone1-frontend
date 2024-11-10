import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
