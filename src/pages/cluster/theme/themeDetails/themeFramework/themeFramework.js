import React, { Component } from "react";
import "./themeFramework.scss";
import { Result, Button } from "antd";

class ThemeFramework extends Component {
  render() {
    return (
      <div className="theme_framework">
        <Result
          status="warning"
          title="未确定消息值架构"
          subTitle="设置架构以确保数据和代码的兼容性"
          extra={<Button type="primary">设置架构</Button>}
        />
      </div>
    );
  }
}

export default ThemeFramework;
