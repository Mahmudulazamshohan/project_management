import React from "react";
import { Route } from "react-router-dom";
// Router interface
import { IRoutes } from "../../interfaces/IRoutes";
// Layout components
import AdminLayouts from "../../layouts/AdminLayouts";
import AppLayouts from "../../layouts/AppLayouts";

import { GuardedRoute } from "./GaurdedRoute";
// redirect authRedirect path
import { authRedirect } from "../../routes";

export const LayoutBaseRender: React.FC<IRoutes> = ({
  rootLayout,
  exact,
  path,
  component,
  authenticate,
  redirect,
}) => {
  let data = <></>;

  if (rootLayout === "AppLayouts") {
    data = (
      <AppLayouts
        children={
          authenticate ? (
            <Route exact={exact} path={path} component={component} />
          ) : (
            <GuardedRoute
              path={path}
              isAllowed={authenticate}
              isAuthenticated={authenticate}
              restrictedPath={redirect || authRedirect}
              authenticationPath={path}
              component={component}
              exact={true}
            />
          )
        }
      />
    );
  } else if (rootLayout === "AdminLayouts") {
    data = (
      <AdminLayouts
        children={
          !authenticate ? (
            <Route exact={exact} path={path} component={component} />
          ) : (
            <GuardedRoute
              path={path}
              isAllowed={true}
              isAuthenticated={authenticate}
              restrictedPath={redirect || authRedirect}
              authenticationPath={path}
              component={component}
              exact={true}
            />
          )
        }
      />
    );
  } else if (rootLayout === undefined) {
    data = <Route exact={exact} path={path} component={component} />;
  }

  return data;
};
