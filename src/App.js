import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateCards from './components/CreateCards'
import Choose from './components/Choose'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CardSetDetail from './components/CardSetDetail'
import './scss/App.scss'

function App() {
  return (
    <Router>      
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-cards">
            <CreateCards />
          </Route>
          <Route exact path="/choose">
            <Choose />
          </Route>
          <Route path="/cardset/:id">
            <CardSetDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
