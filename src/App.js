import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import Home from './components/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/*">
        <NotMatch></NotMatch>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
