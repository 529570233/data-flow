import React, { Component } from "react";
import "./connection.scss";

import { Table } from "antd";
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

const data = [
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
];

class Connection extends Component {
  render() {
    return (
      <>
        <h2 className="connection_title">所有主题连接集群</h2>
        <div className="connection_content">
          <SearchInput placeholder="搜索" width={260} />
          <Table
            bordered
            columns={columns}
            dataSource={data}
            style={{ marginTop: "30px" }}
          />
        </div>
      </>
    );
  }
}

export default Connection;
