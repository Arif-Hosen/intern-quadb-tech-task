import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Summary from './Pages/Summary/Summary';

function App() {
  return (
    <div className="App">
      {/* route setup */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/summary/:id'>
            <Summary></Summary>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
