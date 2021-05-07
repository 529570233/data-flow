import React, { Component } from "react";
import "./home.scss";
import { Button, Card, Col, Row, List, message } from "antd";
import SearchInput from "@/components/searchInput/searchInput";
import { clusterList } from "@/api";

class Home extends Component {
  state = {
    clusterList: [],
  };

  componentDidMount() {
    clusterList().then(res => {
      let { code, data } = res;
      if (code === 0) {
        this.setState(() => {
          if (Array.isArray(data))
            return {
              clusterList: data,
            };
          else {
            console.error("后台返回的数据格式不正确，必须是数组！");
            return null;
          }
        });
      }
    });
  }

  searchRes(res) {
    console.log(res);
    let { code, data } = res;
    if (code === 0) {
      this.setState(() => ({ clusterList: data }));
    } else {
      message.error('搜索内容不存在！', 0.7);
    }
  }

  render() {
    let { clusterList } = this.state;
    return (
      <div className="home" ref={node => (this.homeEle = node)}>
        <div className="cluster_category">
          <h1 className="title">集群</h1>
          <ul className="category">
            <li className="category_item">
              <Button type="primary" size={"large"}>
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
              <SearchInput
                placeholder="搜索集群名称或id"
                searchRes={this.searchRes.bind(this)}
              />
            </Col>
          </Row>

          <div className="cluster_list" style={{ paddingTop: "30px" }}>
            <Row gutter={[40, 40]}>
              {clusterList.map(item => {
                let {
                  clusterId,
                  clusterName,
                  state,
                  overview,
                  connectedServer,
                } = item;
                return (
                  <Col span={8} key={clusterId}>
                    <Card
                      title={clusterName}
                      style={{ borderRadius: "20px" }}
                      extra={
                        <span>{state === "health" ? "健康" : "问题"}</span>
                      }
                      className={
                        state === "health"
                          ? "health_cluster"
                          : "unhealth_cluster"
                      }
                    >
                      <div>
                        <h3>概览</h3>
                        <List
                          size="small"
                          dataSource={overview}
                          renderItem={item => (
                            <List.Item key={item.overviewName}>
                              <List.Item.Meta description={item.overviewName} />
                              <div>{item.overviewValue}</div>
                            </List.Item>
                          )}
                        ></List>
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <h3>已连接服务器</h3>
                        <List
                          size="small"
                          dataSource={connectedServer}
                          renderItem={item => (
                            <List.Item key={item.connectedServerName}>
                              <List.Item.Meta
                                description={item.connectedServerName}
                              />
                              <div>{item.connectedServerValue}</div>
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
