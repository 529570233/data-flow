import React, { Component } from "react";
import "./agent.scss";
import { Card, Col, Row, Table } from "antd";
import SearchInput from "../../../components/searchInput/searchInput";

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
  },
  { title: "Column 8", dataIndex: "address", key: "8" },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

class Agent extends Component {
  render() {
    return (
      <div className="agent">
        <h2 className="agent_title">代理概览</h2>
        <div className="agent_content">
          <Row gutter={16} style={{ marginBottom: "28px" }}>
            <Col span={12}>
              <Card title="生产" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="消费" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>

          <Card
            title="分区与复制"
            bordered={false}
            style={{ width: "100%", marginBottom: "28px" }}
          >
            <ul className="list">
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
            </ul>
          </Card>
          <div className="search_input_box">
            <Row>
              <Col span={6}>
                <SearchInput placeholder="搜索集群名称或id" />
              </Col>
            </Row>
          </div>
          <div className="agent_tatle">
            <Table
              columns={columns}
              dataSource={data}
              scroll={{ x: 1500, y: 300 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Agent;
