import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from './contexts/DataContext';
import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';
import theme from './styles/theme';

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <main>
            <Switch>
              <Route exact path='/' component={SearchView} />
              <Route path='/search/:name' component={MainView} />
            </Switch>
          </main>
        </Router>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
