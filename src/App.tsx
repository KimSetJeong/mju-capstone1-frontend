import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
