import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./api/posts";
import "./App.css";
import { removePostAction } from "./redux/actions/postActions";
import { AppState } from "./redux/store";
import HomePage from "./pages/HomePage";
import AppLayouts from "./layouts/AppLayouts";
import DragPage from "./pages/DragPage";

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
            <Route path="*">Not Found</Route>
          </Switch>
        </AppLayouts>
      </BrowserRouter>
    </div>
  );
}

export default App;
