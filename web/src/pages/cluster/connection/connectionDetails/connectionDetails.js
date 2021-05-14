import React, { Component } from "react";
import "./connectionDetails.scss";
import { Link } from "react-router-dom";
import { Card, Breadcrumb, Button } from "antd";
import qs from "qs";
import { connect } from "react-redux";

class ConnectionDetails extends Component {
  render() {
    let {
        location: { pathname, search },
        routerParam = { clusterIdStore: "" },
      } = this.props,
      connectionName = qs.parse(search.substring(1)).connection_name;
    let { clusterIdStore } = routerParam;

    return (
      <div className="connection_details">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${clusterIdStore}/connection`}>
              所有连接集群
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{connectionName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="connection_title">{connectionName}</h2>
        <div className="connection_details_cards">
          <div className="add_connection">
            <Link to={`${pathname}/choose?connection_name=${connectionName}`}>
              <Button type="primary" icon="plus">
                新建连接器
              </Button>
            </Link>
          </div>
          <Card
            title="连接器"
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

export default connect(state => ({ ...state.routerParamReducer }))(
  ConnectionDetails
);
