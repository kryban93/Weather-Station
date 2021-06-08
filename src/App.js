import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { DataProvider } from './contexts/DataContext';

import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={SearchView} />
          <Route path='/search:name' component={MainView} />
        </Switch>
      </Router>
      <main></main>
    </DataProvider>
  );
};

export default App;
