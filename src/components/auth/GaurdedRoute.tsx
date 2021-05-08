import { RouteProps, Route, Redirect } from "react-router-dom";

export interface IGuardRoute extends RouteProps {
  isAuthenticated: boolean;
  isAllowed: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const GuardedRoute: React.FC<IGuardRoute> = ({
  isAuthenticated,
  isAllowed,
  restrictedPath,
  authenticationPath,
  ...rest
}) => {
  let redirectPath = "";
  if (!isAuthenticated) {
    redirectPath = authenticationPath;
  }
  if (isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
  }

  return !redirectPath && isAuthenticated ? (
    <Route {...rest} render={undefined} />
  ) : (
    <Redirect to={{ pathname: redirectPath }} />
  );
};
