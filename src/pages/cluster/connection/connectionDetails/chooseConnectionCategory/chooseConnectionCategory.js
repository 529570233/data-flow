import React, { Component } from "react";
import "./chooseConnectionCategory.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Row, Col, Select, Card } from "antd";

const { Option } = Select;
class ChooseConnectionCategory extends Component {
  state = {
    cards: [
      { id: 1, title: "title1", tip: "card content1" },
      { id: 2, title: "title2", tip: "card content2" },
      { id: 3, title: "title3", tip: "card content3" },
      { id: 4, title: "title4", tip: "card content4" },
      { id: 5, title: "title5", tip: "card content5" },
      { id: 6, title: "title6", tip: "card content6" },
    ],
  };
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  goAddConnectionPage(id) {
    console.log(this.props);
    let {
        location: { pathname },
      } = this.props;
    this.props.history.push(`${pathname}/add?category=${id}`);
  }

  render() {
    let {
        location: { pathname },
      } = this.props,
      connectionName = /\/cluster\/connection\/(.+)\/choose/.exec(
        pathname
      )[1];
    let { cards } = this.state;
    return (
      <div className="choose_connection">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/connection">所有连接集群</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/connection/${connectionName}?connection_name=${connectionName}`}
            >
              {connectionName}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>浏览</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="page_title">浏览</h2>
        <div className="actions">
          <Row>
            <Col span={5}>
              <Select
                placeholder="按类别筛选"
                style={{ width: "100%" }}
                onChange={this.handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={19}>
              <div className="upload_file">
                <Button type="primary" onClick={() => this.showModal(true)}>
                  上传连接器配置文件
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="connection_category">
          <Row gutter={[16, 16]}>
            {cards.map(item => {
              let { id, title, tip } = item;
              return (
                <Col span={6} key={id}>
                  <Card
                    title={title}
                    bordered={false}
                    onClick={this.goAddConnectionPage.bind(this, id)}
                  >
                    {tip}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default ChooseConnectionCategory;
