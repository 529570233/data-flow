import React, { Component } from "react";
import "./overview.scss";
import { Card } from "antd";

class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <h2 className="overview_title">概览</h2>
        <div className="overview_content">
          <Card title="代理" bordered={false} style={{ width: "100%" }}>
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

export default Overview;
