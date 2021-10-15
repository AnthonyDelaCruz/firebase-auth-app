import React from "react";
import { Switch } from "react-router-dom";

import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";
import PasswordlessSignUpRedirectPage from "pages/PasswordlessSignUpRedirectPage";
import AuthenticatedRoute from "components/AuthenticatedRoute";
import UnAuthenticatedRoute from "components/Unauthenticatedroute";
import { Routes as RouteMap } from "enums/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <UnAuthenticatedRoute
          exact
          path={RouteMap.LOGIN}
          component={LoginPage}
        />
        <UnAuthenticatedRoute
          exact
          path={RouteMap.PASSWORDLESS_REDIRECT}
          component={PasswordlessSignUpRedirectPage}
        />
        <AuthenticatedRoute path={RouteMap.DASHBOARD} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
