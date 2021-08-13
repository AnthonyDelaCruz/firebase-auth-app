import React, { useContext } from "react";
import { AuthContext } from "wrappers/AuthWrapper";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { Routes } from "enums/routes";

function UnAuthenticatedRoute({
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
          return <Redirect to={Routes.PROFILE} />;
        } else {
          return <Component {...routeProps} />;
        }
      }}
    />
  );
}

export default UnAuthenticatedRoute;
