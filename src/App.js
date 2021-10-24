import logo from './testlogo.jpg';
import './App.css';
import LandingPage from './pages/landingPage';
import InputPage from './pages/inputInfoPage';
import ResultsPage from './pages/resultsPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/input" component={InputPage} />
            <Route exact path="/results" component={ResultsPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
