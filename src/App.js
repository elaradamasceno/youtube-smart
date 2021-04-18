import './styles/global.css';
import { ExperienceBar } from './components/ExperienceBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { AreaUser } from './pages/AreaUser';
import { Search } from './pages/Search';
import { Favorites } from './pages/Favorites';
import { Page404 } from './pages/Page404';


function App() {
  return (
    <div className="container">
      <Router>
        <ExperienceBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/area-user">
            <AreaUser />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route>
            <Page404/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
