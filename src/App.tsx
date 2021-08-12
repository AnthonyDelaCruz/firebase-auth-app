import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "pages/Login";
import ProfilePage from "pages/ProfilePage";
import AuthenticatedRoute from "components/AuthenticatedRoute";
import { Routes as RouteMap } from "enums/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={RouteMap.LOGIN} component={LoginPage} />
        <AuthenticatedRoute path={RouteMap.PROFILE} component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
