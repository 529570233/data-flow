import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./agentDetails.scss";
import qs from "qs";
import { Breadcrumb, Card, Button } from "antd";

class AgentDetails extends Component {
  render() {
    let {
        location: { search },
      } = this.props,
      agentName = qs.parse(search.substring(1)).agent_name;
    return (
      <div className="agent_details">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/agent">代理概览</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{agentName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="agent_title">{agentName}</h2>
        <div className="agent_details_cards">
          <div className="delete_agent">
            <Button type="danger">
              删除Stream
            </Button>
          </div>
          <Card
            title="分区与复制"
            bordered={false}
            style={{ width: "100%", marginBottom: "28px" }}
          >
            <ul className="card_data_list">
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
            </ul>
          </Card>
          <Card
            title="分区与复制"
            bordered={false}
            style={{ width: "100%", marginBottom: "28px" }}
          >
            <ul className="card_data_list">
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default AgentDetails;
