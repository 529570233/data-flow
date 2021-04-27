import React, { Component } from "react";
import "./clusterSet.scss";

import { Tabs } from "antd";
import General from "./general/general";
import AgentDefault from "./agentDefault/agentDefault";
import Storage from "./storage/storage";

const { TabPane } = Tabs;

class ClusterSet extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    return (
      <div className="cluster_set">
        <h2 className="cluster_set_title">集群设置</h2>
        <div className="cluster_set_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="总则" key="1">
              <General />
            </TabPane>
            <TabPane tab="代理预设" key="2">
              <AgentDefault />
            </TabPane>
            <TabPane tab="自平衡" key="3">
              暂无内容...
            </TabPane>
            <TabPane tab="存储" key="4">
              <Storage />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ClusterSet;
