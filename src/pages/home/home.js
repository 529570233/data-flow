import React, { Component } from "react";

import "./home.scss";
import { Button, Card, Col, Row, List } from "antd";
import SearchInput from "../../components/searchInput/searchInput";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

class Home extends Component {
  render() {
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
          <SearchInput placeholder="搜索集群名称或id" width={260} />
          <div className="cluster_list" style={{ paddingTop: "30px" }}>
            <Row gutter={70}>
              <Col span={8}>
                <Card
                  title="集群1"
                  style={{ borderRadius: "20px" }}
                  extra={<span>健康</span>}
                >
                  <div>
                    <h3>概览</h3>
                    <List
                      size="small"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item key={item.id}>
                          <List.Item.Meta description={"eeeee"} />
                          <div>Content</div>
                        </List.Item>
                      )}
                    ></List>
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <h3>已连接服务器</h3>
                    <List
                      size="small"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item key={item.id}>
                          <List.Item.Meta description={"eeeee"} />
                          <div>Content</div>
                        </List.Item>
                      )}
                    ></List>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
