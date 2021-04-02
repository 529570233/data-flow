import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./agentIndicator.scss";
import qs from "qs";
import { Breadcrumb } from "antd";

class AgentIndicator extends Component {
  render() {
    let {
        location: { search },
      } = this.props,
      indicatorName = qs.parse(search.substring(1)).indicator_name;
    return (
      <div className="agent_indicator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/agent">代理概览</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{indicatorName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="agent_indicator_title">{indicatorName}</h2>
      </div>
    );
  }
}

export default AgentIndicator;
