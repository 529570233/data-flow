import React, { Component } from "react";

import "./home.scss";
import { Button, Card, Col, Row, List } from "antd";
import SearchInput from "../../components/searchInput/searchInput";

class Home extends Component {
  state = {
    clusterList: [
      {
        title: "集群1",
        isHealth: true,
        general: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
        linkServer: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
      },
      {
        title: "集群2",
        isHealth: false,
        general: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
        linkServer: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
      },
      {
        title: "集群3",
        isHealth: false,
        general: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
        linkServer: [
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
          { name: "key", value: "value" },
        ],
      },
    ],
  };
  render() {
    let { clusterList } = this.state;
    return (
      <div className="home">
        <div className="cluster">
          <h1 className="title">集群</h1>
          <ul className="category">
            <li className="category_item">
              <Button type="primary" size={"large"} className="health_btn">
                1
              </Button>
              <span className="category_name">健康集群</span>
            </li>
            <li className="category_item">
              <Button type="primary" size={"large"} className="trouble_btn">
                2
              </Button>
              <span className="category_name">问题集群</span>
            </li>
          </ul>
        </div>
        <div className="cluster_wrap">
          <Row>
            <Col span={5}>
              <SearchInput placeholder="搜索集群名称或id" />
            </Col>
          </Row>

          <div className="cluster_list" style={{ paddingTop: "30px" }}>
            <Row gutter={[40, 40]}>
              {clusterList.map(item => {
                let { title, isHealth, general, linkServer } = item;
                return (
                  <Col span={8} key={title}>
                    <Card
                      title={title}
                      style={{ borderRadius: "20px" }}
                      extra={<span>{isHealth ? "健康" : "问题"}</span>}
                      className={
                        isHealth ? "health_cluster" : "unhealth_cluster"
                      }
                    >
                      <div>
                        <h3>概览</h3>
                        <List
                          size="small"
                          dataSource={general}
                          renderItem={item => (
                            <List.Item key={item.id}>
                              <List.Item.Meta description={item.name} />
                              <div>{item.value}</div>
                            </List.Item>
                          )}
                        ></List>
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <h3>已连接服务器</h3>
                        <List
                          size="small"
                          dataSource={linkServer}
                          renderItem={item => (
                            <List.Item key={item.id}>
                              <List.Item.Meta description={item.name} />
                              <div>{item.value}</div>
                            </List.Item>
                          )}
                        ></List>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
