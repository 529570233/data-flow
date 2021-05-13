import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./agent.scss";
import { Card, Col, Row, Table } from "antd";
import SearchInput from "@/components/searchInput/searchInput";

const { Column, ColumnGroup } = Table;
class Agent extends Component {
  state = {
    tableData: [
      {
        key: "1",
        name: "agent1",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
      },
      {
        key: "2",
        name: "agent2",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
      },
      {
        key: "3",
        name: "agent3",
        copy_area: "0 of 5",
        async_follower: "0 of 5",
        async_observer: "0 of 0",
      },
    ],
  };

  goIndicatorPage(name) {
    let {
      location: { pathname },
    } = this.props;
    this.props.history.push(`${pathname}/indicator?indicator_name=${name}`);
  }

  render() {
    let { tableData } = this.state,
      {
        location: { pathname },
      } = this.props;

    return (
      <div className="agent">
        <h2 className="agent_title">代理概览</h2>
        <div className="agent_content">
          <Row gutter={16} style={{ marginBottom: "28px" }}>
            <Col span={12}>
              <Card
                title="生产"
                bordered={false}
                onClick={() => this.goIndicatorPage("生产")}
              >
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
            <ul className="card_data_list">
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
            </ul>
          </Card>
          <Row gutter={16} style={{ marginBottom: "28px" }}>
            <Col span={12}>
              <Card title="自我平衡" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="分层存储" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
          <div className="search_input_box">
            <Row>
              <Col span={6}>
                <SearchInput placeholder="搜索集群名称或id" />
              </Col>
            </Row>
          </div>
          <div className="agent_tatle">
            <Table dataSource={tableData} bordered>
              <Column
                title="ksqlDB应用程序名称"
                dataIndex="name"
                align="center"
                render={(text, record) => (
                  <Link to={`${pathname}/details?agent_name=${text}`}>
                    {text}
                  </Link>
                )}
              />
              <ColumnGroup title="有效性">
                <Column align="center" title="复制分区" dataIndex="copy_area" />
                <Column
                  align="center"
                  title="非同步跟随者"
                  dataIndex="async_follower"
                />
                <Column
                  align="center"
                  title="非同步观察者"
                  dataIndex="async_observer"
                />
              </ColumnGroup>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Agent;
