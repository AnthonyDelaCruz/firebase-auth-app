import React, { useContext } from "react";
import { AuthContext } from "wrappers/AuthWrapper";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { Routes } from "enums/routes";

function AuthenticatedRoute({
  component: Component,
  ...props
}: RouteProps): React.ReactElement | null {
  const currentUser = useContext(AuthContext);

  if (!Component) return null;

  return (
    <Route
      {...props}
      render={(routeProps) => {
        if (currentUser) return <Component {...routeProps} />;

        return <Redirect to={Routes.LOGIN} />;
      }}
    />
  );
}

export default AuthenticatedRoute;
