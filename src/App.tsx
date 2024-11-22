import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';

import Question from './pages/Question';
import Resume from './pages/Resume';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Loading from './pages/Loading';
import Upload from './pages/Upload';

function App() {
  const HeaderWrapper = () => {
    const location = useLocation();
    const hideHeaderPaths = ['/Login', '/login', '/signup'];
    if (hideHeaderPaths.includes(location.pathname)) {
      return null;
    }

    return <Header />;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router>
          <HeaderWrapper />
          <Routes>
            <Route path="/question" element={<Question />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
