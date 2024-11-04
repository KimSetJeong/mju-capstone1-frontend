import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
import Mypage from './pages/Mypage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
