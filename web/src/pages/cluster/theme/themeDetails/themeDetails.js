import React, { Component } from "react";
import "./themeDetails.scss";
import { Link } from "react-router-dom";
import { Tabs, Breadcrumb } from "antd";
import qs from "qs";
import ThemeOverview from "./themeOverview/themeOverview";
import ThemeConfig from "./themeConfig/themeConfig";
import ThemeFramework from "./themeFramework/themeFramework";
import { connect } from "react-redux";

const { TabPane } = Tabs;
class ThemeDetails extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    let {
        location: { search },
        routerParam,
      } = this.props,
      themeName = qs.parse(search.substring(1)).theme_name;
    return (
      <div className="theme_details">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${routerParam}/theme`}>所有主题</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{themeName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="theme_title">{themeName}</h2>
        <div className="theme_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="概览" key="1">
              <ThemeOverview themeName={themeName} />
            </TabPane>
            <TabPane tab="消息" key="2">
              222
            </TabPane>
            <TabPane tab="架构" key="3">
              <ThemeFramework />
            </TabPane>
            <TabPane tab="配置" key="4">
              <ThemeConfig />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  ThemeDetails
);
