
import './App.css';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom';
import Home from './container/Home/Home';
import Error404 from './container/404/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/not-found" component={Error404} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

export default App;
