import { RouteProps } from "react-router";

export interface IRoutes extends RouteProps {
  path: string;
  title: string;
  exact?: boolean;
  children?: IRoutes[];
}
