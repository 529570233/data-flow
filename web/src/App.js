import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/styles/reset.css";
import "./assets/styles/icon-font.css";
import Head from "./components/head/head";
import Home from "./pages/home/home";
import Cluster from "./pages/cluster/cluster";
import { Provider } from "react-redux";
import store from "@/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Head store={store} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            {/* 使用redux时，在定义connect()组件的路由时，会隐式地将一些额外的参数传递给它，所以应该使用render而不是component，否则报警告 */}
            <Route
              path="/cluster/:clusterId"
              render={props => <Cluster {...props} />}
            />
            <Redirect to={"/home"}></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
