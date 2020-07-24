import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import BucketList from "./components/BucketList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="content">
        <Switch>
          <Route path="/about">
            <div>This is the about page.</div>
          </Route>
          <Route path="/">
            <BucketList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
