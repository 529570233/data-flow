import React, { Component } from "react";
import "./consumerDetails.scss";
import { Link } from "react-router-dom";
import { Tabs, Breadcrumb } from "antd";
import qs from "qs";
import ConsumeBackward from "./consumeBackward/consumeBackward";

const { TabPane } = Tabs;
class ConsumerDetails extends Component {
  callback(key) {
    console.log(key);
  }

  render() {
    let {
        location: { search },
      } = this.props,
      consumerName = qs.parse(search.substring(1)).consumer_name;
    return (
      <div className="consumer_details">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/consumer">所有消费群体</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{consumerName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="ksqlDB_title">{consumerName}</h2>
        <div className="ksqlDB_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="消费滞后" key="1">
              <ConsumeBackward />
            </TabPane>
            <TabPane tab="消费" key="2">
              2222
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ConsumerDetails;
