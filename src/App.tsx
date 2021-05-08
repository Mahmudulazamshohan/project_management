import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,

} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayouts from "./layouts/AppLayouts";
import DragPage from "./pages/DragPage";
import { GuardedRoute } from "./components/auth/GaurdedRoute";



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
            <GuardedRoute
              path={"/abcd"}
              isAllowed={true}
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
    </div>
  );
}
export default App;
