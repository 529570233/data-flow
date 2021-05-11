import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./cluster.scss";
import { Menu, Affix } from "antd";
import Overview from "./overview/overview";
import Agent from "./agent/agent";
import Theme from "./theme/theme";
import Connection from "./connection/connection";
import KsqlDb from "./ksqlDb/ksqlDb";
import Consumer from "./consumer/consumer";
import ClusterSet from "./clusterSet/clusterSet";
import KsqlDbDetails from "./ksqlDb/ksqlDbDetails/ksqlDbDetails";
import AgentDetails from "./agent/agentDetails/agentDetails";
import AgentIndicator from "./agent/agentIndicator/agentIndicator";
import ThemeDetails from "./theme/themeDetails/themeDetails";
import ConnectionDetails from "./connection/connectionDetails/connectionDetails";
import ChooseConnectionCategory from "./connection/connectionDetails/chooseConnectionCategory/chooseConnectionCategory";
import AddConnection from "./connection/connectionDetails/chooseConnectionCategory/addConnection/addConnection";
import ConsumerDetails from "./consumer/consumerDetails/consumerDetails";
import ThemeIndicator from "./theme/themeDetails/themeOverview/themeIndicator/themeIndicator";
import AddTheme from "./theme/addTheme/addTheme";
import { connect } from "react-redux";

class Cluster extends Component {
  state = {
    sidenav: [
      {
        title: "概览",
        icon: "icon-common",
        link: "/overview",
      },
      {
        title: "代理",
        icon: "icon-broker",
        link: "/agent",
      },
      {
        title: "主题",
        icon: "icon-topic",
        link: "/theme",
      },
      {
        title: "连接",
        icon: "icon-connector",
        link: "/connection",
      },
      {
        title: "KSQL DB",
        icon: "icon-ksqldb",
        link: "/ksqlDb",
      },
      {
        title: "消费者",
        icon: "icon-customer",
        link: "/consumer",
      },
      {
        title: "集群设置",
        icon: "icon-setting",
        link: "/clusterSet",
      },
    ],
  };

  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    let { sidenav } = this.state,
      {
        match: {
          url,
          params: { clusterId: routerParam },
        },
      } = this.props;

    let routerReg = /(.*)([^\/]+)(.*)/g;
    return (
      <div className="cluster" ref={node => (this.clusterContainer = node)}>
        <div className="side_nav_wrap">
          <Affix target={() => this.clusterContainer} offsetTop={0}>
            <div className="side_nav">
              <h2 className="cluster_name">集群1</h2>
              <Menu
                onClick={this.handleClick}
                style={{ width: "100%", background: "none" }}
                defaultSelectedKeys={["0"]}
                mode="inline"
              >
                {sidenav.map((item, index) => {
                  let { title, icon, link } = item;
                  return (
                    <Menu.Item key={index}>
                      <NavLink to={url + link} exact>
                        <span className={`${icon} side_nav_icon`}></span>
                        {title}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </div>
          </Affix>
        </div>
        <div className="cluster_content">
          <Switch>
            <Route
              path={`/cluster/${routerParam}/overview`}
              exact
              component={Overview}
            />
            <Route
              path={`/cluster/${routerParam}/theme`}
              exact
              component={Theme}
            />
            <Route
              path={`/cluster/${routerParam}/add`}
              exact
              component={AddTheme}
            />
            <Route
              path={`/cluster/${routerParam}/theme/*/indicator`}
              exact
              component={ThemeIndicator}
            />
            <Route
              path={`/cluster/${routerParam}/theme/*`}
              exact
              component={ThemeDetails}
            />
            <Route
              path={`/cluster/${routerParam}/agent`}
              exact
              component={Agent}
            />
            <Route
              path={`/cluster/${routerParam}/agent/indicator`}
              exact
              render={props => <AgentIndicator {...props} />}
            />
            <Route
              path={`/cluster/${routerParam}/agent/*`}
              exact
              render={props => <AgentDetails {...props} />}
            />
            <Route
              path={`/cluster/${routerParam}/ksqlDb`}
              exact
              component={KsqlDb}
            />
            <Route
              path={`/cluster/${routerParam}/ksqlDb/*`}
              exact
              component={KsqlDbDetails}
            />
            <Route
              path={`/cluster/${routerParam}/consumer`}
              exact
              component={Consumer}
            />
            <Route
              path={`/cluster/${routerParam}/consumer/*"`}
              exact
              component={ConsumerDetails}
            />
            <Route
              path={`/cluster/${routerParam}/clusterSet`}
              exact
              component={ClusterSet}
            />
            <Route
              path={`/cluster/${routerParam}/connection`}
              exact
              component={Connection}
            />
            <Route
              path={`/cluster/${routerParam}/connection/*/choose`}
              exact
              component={ChooseConnectionCategory}
            />
            <Route
              path={`/cluster/${routerParam}/connection/*/choose/add`}
              exact
              component={AddConnection}
            />
            <Route
              path={`/cluster/${routerParam}/connection/*`}
              exact
              component={ConnectionDetails}
            />
            <Redirect
              from={`/cluster/${routerParam}`}
              to={`/cluster/${routerParam}/overview`}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  withRouter(Cluster)
);
