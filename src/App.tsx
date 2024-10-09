import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalFont } from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <Router>
        <Header />
      </Router>
    </ThemeProvider>
  );
}

export default App;
