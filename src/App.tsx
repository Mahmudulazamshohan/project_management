import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// css import
import "./App.css";

import routes from "./routes";
import { LayoutBaseRender } from "./components/auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, k) => {
            return <LayoutBaseRender key={k} {...route} />;
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
