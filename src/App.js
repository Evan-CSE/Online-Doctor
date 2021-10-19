import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About/About";
import FirebaseInit from "./FirebaseAuth/FirebaseInit";

FirebaseInit();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
        </Route>
        <Route exact path='/home'>
          <Header></Header>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
