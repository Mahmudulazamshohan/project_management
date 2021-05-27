import React, { Component } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayouts from "./layouts/AppLayouts";
import DragPage from "./pages/DragPage";
import { GuardedRoute } from "./components/auth/GaurdedRoute";
import { RecusiveList } from "./components/recursive";
import TreeList from './components/tree'
interface IR {
  path: string;
  component: React.ReactNode;
  nested?: IR[];
}

const r = [
  {
    path: "/a",
    component: <p>a</p>,
    nested: [
      {
        path: "/b",
        component: <p>b</p>,
      },
    ],
  },
];
const Topics: React.FC = () => {
  let match = useRouteMatch();
  return (
    <>
      <p>Topics</p>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <p>asda</p>
        </Route>
        <Route path={`${match.url}`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayouts>
          <Switch>
            <Route exact={true} path="/">
              <HomePage />
            </Route>
            <Route exact={true} path="/drag-page">
              <DragPage />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <GuardedRoute
              path={"/abcd"}
              isAllowed={false}
              isAuthenticated={true}
              restrictedPath={"/not-allowed"}
              authenticationPath={"/authenticate"}
              children={<p>abcd</p>}
              exact={true}
            />
            <Route path="*">Not Found</Route>
          </Switch>
        </AppLayouts>
      </BrowserRouter>
    
      <TreeList/>
    </div>
  );
}
export default App;
