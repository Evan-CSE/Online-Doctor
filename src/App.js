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
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import React from "react";
import GoogleSignIn from "./FirebaseAuth/GoogleSignIn/GoogleSignIn";


FirebaseInit();
export const MyContext = React.createContext({});

function App() {
  const user = GoogleSignIn();
  return (
    <MyContext.Provider value={user}><Router>
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
        <Route exact path='/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route>
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
