import React, { Component } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayouts from "./layouts/AppLayouts";
import DragPage from "./pages/DragPage";
import { GuardedRoute } from "./components/auth/GaurdedRoute";
import { IRoutes } from "./interfaces/IRoutes";
import routes from "./routes";

interface IParams {
  topicId: string;
}
const Abcd = () => {
  let params = useParams<IParams>();
  console.log("params", params.topicId);
  return <div>useParams {params.topicId}</div>;
};
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
        <Route path={`${match.url}/:topicId`} exact={true}>
          <Abcd />
        </Route>
        <Route path={`${match.url}`} exact={true}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
};

interface IRouterRecursiveProps {
  routes: Array<IRoutes>;
  key?: number;
}
const AppLayoutRoute: React.FC<IRoutes> = ({ layout, path, component }) => {
  return <Route path={path} exact={true}></Route>;
};

// const RouterRecusiveTree: React.FC<IRouterRecursiveProps> = ({
//   routes,
//   key,
// }) => {
//   return (
//     <Switch key={key}>
//       {routes.map((route: IRoutes, key: number) => {
//         return (
//           <>
//             <AppLayoutRoute
//               title="aa"
//               key={key}
//               path={route.path}
//               exact={true}
//               component={route.component}
//               children={[]}
//             />
//             {route && route.children.length > 0 && (
//               <Switch>
//                 <RouterRecusiveTree key={key} routes={route.children} />
//               </Switch>
//             )}
//           </>
//         );
//       })}
//     </Switch>
//   );
// };

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayouts>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}

            {/* <Route exact={true} path="/drag-page">
              <DragPage />
            </Route>
            <Route path="/topics" exact={false}>
              <Topics />
            </Route>
            <GuardedRoute
              path={"/abcd"}
              isAllowed={true}
              isAuthenticated={true}
              restrictedPath={"/not-allowed"}
              authenticationPath={"/authenticate"}
              children={<p>abcd</p>}
              exact={true}
            />
            <Route path="*">Not Found</Route> */}
          </Switch>
        </AppLayouts>
      </BrowserRouter>
    </div>
  );
}
export default App;
