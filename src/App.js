import React from "react";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import LookupClub from './components/LookupClub/LookupClub';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/club/:idTeam">
          <LookupClub></LookupClub>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
