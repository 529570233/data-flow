import React, { Component } from "react";
import "./themeDetails.scss";
import { Link } from "react-router-dom";
import { Tabs, Breadcrumb } from "antd";
import qs from "qs";

const { TabPane } = Tabs;
class ThemeDetails extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    let {
        location: { search },
      } = this.props,
      themeName = qs.parse(search.substring(1)).theme_name;
    return (
      <div className="themeDetails">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/theme">所有主题</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{themeName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="theme_title">{themeName}</h2>
        <div className="theme_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="概览" key="1">
              111
            </TabPane>
            <TabPane tab="消息" key="2">
              222
            </TabPane>
            <TabPane tab="架构" key="3">
              333
            </TabPane>
            <TabPane tab="配置" key="4">
              444
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ThemeDetails;
