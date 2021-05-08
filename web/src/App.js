import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/icon-font.css";

import Head from "./components/head/head";
import Home from "./pages/home/home";
import Cluster from "./pages/cluster/cluster";

import store from "@/store";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Head store={store} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/cluster" component={Cluster} /> */}
          <Route path="/cluster" render={() => <Cluster store={store} />} />
          <Redirect to={"/home"}></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
