import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from "./Components/Home/Home";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";
import Nomatch from "./Components/NoMatch/Nomatch";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/league/:idLeague">
            <LeagueDetails />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
