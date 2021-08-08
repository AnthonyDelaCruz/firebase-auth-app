import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "pages/Login";

import { Routes as RouteMap } from "enums/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={RouteMap.ROOT} component={LoginPage} />
        <Route path={RouteMap.PROFILE} component={() => <div>PROFILE</div>} />
      </Switch>
    </div>
  );
}

export default App;
