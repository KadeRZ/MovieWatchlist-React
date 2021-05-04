import React from "react";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Addlist } from './components/Addlist';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Watchlist/>
          </Route>

          <Route exact path="/watched">
            <Watched/>
          </Route>

          <Route exact path="/addlist">
            <Addlist/>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
