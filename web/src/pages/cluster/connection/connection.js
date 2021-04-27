import React, { Component } from "react";
import "./connection.scss";
import { Link } from "react-router-dom";
import { Table, Row, Col } from "antd";
import SearchInput from "@/components/searchInput/searchInput";

const { Column } = Table;
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
          <Table dataSource={tableData} bordered style={{ marginTop: "30px" }}>
            <Column
              title="集群名称"
              dataIndex="name"
              align="center"
              render={(text, record) => (
                <Link to={`/cluster/connection/${text}?connection_name=${text}`}>
                  {text}
                </Link>
              )}
            />
            <Column
              title="连接器总数"
              dataIndex="age"
              align="center"
            />
            <Column
              title="运行的连接器"
              dataIndex="address"
              align="center"
            />
          </Table>
        </div>
      </div>
    );
  }
}

export default Connection;
