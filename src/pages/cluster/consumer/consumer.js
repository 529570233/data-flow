import React, { Component } from "react";
import "./consumer.scss";
import { Link } from "react-router-dom";
import { Table, Row, Col } from "antd";
import SearchInput from "@/components/searchInput/searchInput";

const { Column } = Table;
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
          <Table bordered dataSource={tableDate} style={{ marginTop: "30px" }}>
            <Column
              title="Name"
              dataIndex="name"
              align='center'
              render={(text, record) => (
                <Link to={`/cluster/consumer/${text}?consumer_name=${text}`}>
                  {text}
                </Link>
              )}
            />
            <Column title="Age" dataIndex="age" align='center' />
            <Column title="Address" dataIndex="address" align='center' />
          </Table>
        </div>
      </div>
    );
  }
}

export default Consumer;
