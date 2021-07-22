import React, { useEffect, useState } from "react";
import { Route, useHistory, withRouter } from "react-router-dom";
// Router interface
import { IRoutes } from "../../interfaces/IRoutes";
// Layout components
import AdminLayouts from "../../layouts/AdminLayouts";
import AppLayouts from "../../layouts/AppLayouts";
import Logo from "../../teams.svg";
import { GuardedRoute } from "./GaurdedRoute";
// redirect authRedirect path
import { authRedirect } from "../../routes";
import { Col, Progress, Row } from "antd";
import Icon, { PlayCircleOutlined } from "@ant-design/icons";

export const LayoutBaseRender: React.FC<IRoutes> = ({
  rootLayout,
  exact,
  path,
  component,
  authenticate,
  redirect,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  let data = (
    <div style={{ height: "100%" }}>
      <Row
        justify="center"
        align="middle"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Col span={12}>
          <Row justify="center" align="middle">
            <img src={Logo} style={{ width: "100px" }} />
          </Row>
          <Progress percent={progress} size="small" />
        </Col>
      </Row>
    </div>
  );

  useEffect(() => {
    var count = 1;
    var interval = 100;
    var per = 28;
    var progessInterval = setInterval(() => {
      if (count >= 100) {
        clearInterval(progessInterval);
        setLoaded(true);
      }
      setProgress(count);
      count = count + Math.floor(Math.random() * per);
    }, interval);
  }, []);

  // console.log("rootLayout", rootLayout === undefined);
  // console.log("component", component);
  if (isLoaded) {
    if (rootLayout === "AppLayouts") {
      data = (
        <AppLayouts
          children={
            authenticate ? (
              <Route
                exact={exact}
                path={path}
                component={component}
              />
            ) : (
              <GuardedRoute
                path={path}
                redirectTo={redirect}
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
              <Route
                exact={exact}
                path={path}
                component={component}
              />
            ) : (
              <GuardedRoute
                path={path}
                redirectTo={redirect}
                component={component}
                exact={true}
              />
            )
          }
        />
      );
    } else if (rootLayout === undefined) {
      data = (
        <Route exact={exact} path={path} component={component} />
      );
    }
  }

  return data;
};
export default LayoutBaseRender;
