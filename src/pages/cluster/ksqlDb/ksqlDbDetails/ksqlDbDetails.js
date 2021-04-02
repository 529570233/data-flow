import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./ksqlDbDetails.scss";
import qs from "qs";
import { Tabs, Breadcrumb } from "antd";
import KsqlDbDetailsEdit from "./ksqlDbDetailsEdit/ksqlDbDetailsEdit";
import KsqlDbDetailsStreams from "./ksqlDbDetailsStreams/ksqlDbDetailsStreams";
import KsqlDbDetailsStreamsDetails from "./ksqlDbDetailsStreams/ksqlDbDetailsStreamsDetails/ksqlDbDetailsStreamsDetails";
import KsqlDbDetailsTable from "./ksqlDbDetailsTable/ksqlDbDetailsTable";
import KsqlDbDetailsFlow from "./ksqlDbDetailsFlow/ksqlDbDetailsFlow";

const { TabPane } = Tabs;
class KsqlDbDetails extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    let {
        location: { search },
      } = this.props,
      ksqlDbName = qs.parse(search.substring(1)).ksqlDb_name;

    return (
      <div className="KsqlDB_details">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/ksqlDb">KSQLDB</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{ksqlDbName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="ksqlDB_title">{ksqlDbName}</h2>
        <div className="ksqlDB_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="编辑" key="1">
              <KsqlDbDetailsEdit />
            </TabPane>
            <TabPane tab="flow" key="2">
              <KsqlDbDetailsFlow />
            </TabPane>
            <TabPane tab="streams" key="3">
              <Switch>
                <Route
                  path={`/cluster/ksqlDb/${ksqlDbName}`}
                  exact
                  component={KsqlDbDetailsStreams}
                />
                <Route
                  path={`/cluster/ksqlDb/${ksqlDbName}/*`}
                  component={KsqlDbDetailsStreamsDetails}
                />
              </Switch>
            </TabPane>
            <TabPane tab="表格" key="4">
              <KsqlDbDetailsTable />
            </TabPane>
            <TabPane tab="运行中查询" key="5">
              555
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default KsqlDbDetails;
