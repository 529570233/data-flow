import React, { Component } from "react";
import "./themeConfig.scss";
import { Row, Col, Button } from "antd";

class ThemeConfig extends Component {
  state = {
    flowDrawerData: [
      { name: "key1", value: "value1" },
      { name: "key2", value: "value2" },
      { name: "key3", value: "value3" },
      { name: "key4", value: "value4" },
    ],
  };
  render() {
    let { flowDrawerData } = this.state;
    return (
      <div className="theme_config">
        <div className="config_list">
          {flowDrawerData.map(item => {
            let { name, value } = item;
            return (
              <Row gutter={[20, 15]} key={name}>
                <Col span={6}>{name}</Col>
                <Col span={18}>{value}</Col>
              </Row>
            );
          })}
        </div>
        <div className="action">
          <span className="edit_config_box">
            <Button type="primary">编辑配置</Button>
          </span>
          <span className="show_config_box">
            <Button type="primary">显示全部配置</Button>
          </span>
        </div>
      </div>
    );
  }
}

export default ThemeConfig;
