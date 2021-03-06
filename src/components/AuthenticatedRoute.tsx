import React, { useContext } from "react";
import { AuthContext } from "wrappers/AuthWrapper";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { Routes } from "enums/routes";

function AuthenticatedRoute({
  component: Component,
  ...props
}: RouteProps): React.ReactElement | null {
  const { currentUser, isLoadingUser } = useContext(AuthContext);

  if (!Component) return null;

  return (
    <Route
      {...props}
      render={(routeProps) => {
        if (isLoadingUser) return <div>Loading...</div>;

        if (!isLoadingUser && currentUser) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to={Routes.LOGIN} />;
        }
      }}
    />
  );
}

export default AuthenticatedRoute;
