import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
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

class Cluster extends Component {
  handleClick = e => {
    console.log("click ", e);
  };

  state = {
    sidenav: [
      { title: "概览", icon: "icon-11", link: "/cluster/overview" },
      { title: "代理", icon: "icon-1", link: "/cluster/agent" },
      { title: "主题", icon: "icon-18", link: "/cluster/theme" },
      { title: "连接", icon: "icon-14", link: "/cluster/connection" },
      { title: "KSQL DB", icon: "icon-16", link: "/cluster/ksqlDb" },
      { title: "消费者", icon: "icon-16", link: "/cluster/consumer" },
      { title: "集群设置", icon: "icon-15", link: "/cluster/clusterSet" },
    ],
  };

  render() {
    let { sidenav } = this.state;
    return (
      <div className="cluster">
        <div className="side_nav_wrap">
          <Affix offsetTop={60}>
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
                      <NavLink to={link} exact>
                        <span className={`${icon} side_nav_icon`}>
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                          <span className="path4"></span>
                          <span className="path5"></span>
                        </span>
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
            <Route path="/cluster" exact component={Overview} />
            <Route path="/cluster/overview" exact component={Overview} />
            <Route path="/cluster/theme" exact component={Theme} />
            <Route path="/cluster/theme/*" exact component={ThemeDetails} />
            <Route path="/cluster/agent" exact component={Agent} />
            <Route path="/cluster/agent/details/*" exact component={AgentDetails} />
            <Route path="/cluster/agent/indicator/*" exact component={AgentIndicator} />
            <Route path="/cluster/ksqlDb" exact component={KsqlDb} />
            <Route path="/cluster/ksqlDb/*" exact component={KsqlDbDetails} />
            <Route path="/cluster/consumer" exact component={Consumer} />
            <Route path="/cluster/clusterSet" exact component={ClusterSet} />
            <Route path="/cluster/connection" exact component={Connection} />
            <Route path="/cluster/connection/*/choose" exact component={ChooseConnectionCategory} />
            <Route path="/cluster/connection/*/choose/add" exact component={AddConnection} />
            <Route path="/cluster/connection/*" exact component={ConnectionDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Cluster;
