import React, { Component } from "react";
import "./ksqlDbDetailsStreamsDetails.scss";
import { List, Row, Col, Table, Button } from "antd";

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
];

class KsqlDbDetailsStreamsDetails extends Component {
  state = {
    themeData: [
      { name: "key", value: "value" },
      { name: "key", value: "value" },
      { name: "key", value: "value" },
      { name: "key", value: "value" },
    ],
    tableData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
      },
      {
        key: "2",
        name: "Jim Green",
        age: 32,
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
      },
    ],
  };
  render() {
    let { themeData, tableData } = this.state;
    return (
      <div className="ksqlDb_details_streams_details">
        <Row>
          <Col span={10}>
            <div className="theme">
              <h3>主题</h3>
              <List
                size="small"
                dataSource={themeData}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <List.Item.Meta description={item.name} />
                    <div>{item.value}</div>
                  </List.Item>
                )}
              ></List>
            </div>
            <div className="framework">
              <h3>架构</h3>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                size="middle"
              />
            </div>
            <div className="action">
              <span className="query_stream_box">
                <Button type="primary">查询Stream</Button>
              </span>
              <span className="delete_stream_box">
                <Button type="primary">删除Stream</Button>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default KsqlDbDetailsStreamsDetails;
