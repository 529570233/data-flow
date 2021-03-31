import React, { Component } from "react";
import "./connection.scss";

import { Table, Row, Col } from "antd";
import SearchInput from "../../../components/searchInput/searchInput";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
class Connection extends Component {
  state = {
    tableData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
    ],
  };
  render() {
    let { tableData } = this.state;
    return (
      <div className="connection">
        <h2 className="connection_title">所有主题连接集群</h2>
        <div className="connection_content">
          <Row>
            <Col span={6}>
              <SearchInput placeholder="搜索" />
            </Col>
          </Row>
          <Table
            bordered
            columns={columns}
            dataSource={tableData}
            style={{ marginTop: "30px" }}
          />
        </div>
      </div>
    );
  }
}

export default Connection;
