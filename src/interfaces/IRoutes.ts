import React from "react";
import { RouteProps } from "react-router";
import { RouteComponentProps } from "react-router-dom";

export interface IRoutes extends RouteProps {
  path: string;
  title: string;
  exact?: boolean;
  layout?: any;
}
