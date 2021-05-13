import React, { Component } from "react";
import "./chooseConnectionCategory.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Row, Col, Select, Card } from "antd";
import qs from "qs";
import { connect } from "react-redux";

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
    let {
      location: { pathname,search },
    } = this.props;
    let connectionName = qs.parse(search.substring(1)).connection_name;
    this.props.history.push(`${pathname}/add?connection_name=${connectionName}&category=${id}`);
  }

  render() {
    let {
      location: { search },
      routerParam,
    } = this.props;

    let connectionName = qs.parse(search.substring(1)).connection_name,
      { cards } = this.state;

    return (
      <div className="choose_connection">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${routerParam}/connection`}>所有连接集群</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/${routerParam}/connection/details?connection_name=${connectionName}`}
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
                <Button type="primary">上传连接器配置文件</Button>
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

export default connect(state => ({ ...state.routerParamReducer }))(
  ChooseConnectionCategory
);
