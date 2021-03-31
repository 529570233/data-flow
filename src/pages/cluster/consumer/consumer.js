import React, { Component } from "react";
import "./consumer.scss";

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
class Consumer extends Component {
  state = {
    tableDate: [
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
    let { tableDate } = this.state;
    return (
      <div className="consumer">
        <h2 className="consumer_title">所有消费群体</h2>
        <div className="consumer_content">
          <Row>
            <Col span={6}>
              <SearchInput placeholder="搜索消费群体" />
            </Col>
          </Row>
          <Table
            bordered
            columns={columns}
            dataSource={tableDate}
            style={{ marginTop: "30px" }}
          />
        </div>
      </div>
    );
  }
}

export default Consumer;
