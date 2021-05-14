import React, { Component } from "react";
import "./themeIndicator.scss";
import { Link } from "react-router-dom";
import { Tabs, Breadcrumb } from "antd";
import ThemeIndicatorProduction from "./themeIndicatorProduction/themeIndicatorProduction";
import ThemeIndicatorConsume from "./themeIndicatorConsume/themeIndicatorConsume";
import ThemeIndicatorAvailability from "./themeIndicatorAvailability/themeIndicatorAvailability";
import qs from "qs";
import { connect } from "react-redux";

const { TabPane } = Tabs;
class ThemeIndicator extends Component {
  callback(key) {
    console.log(key);
  }

  render() {
    let {
      routerParam = { clusterIdStore: "" },
      location: { search },
    } = this.props;
    let themeName = qs.parse(search.substring(1)).theme_name,
      { clusterIdStore } = routerParam;

    return (
      <div className="theme_indicator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${clusterIdStore}/theme`}>所有主题</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/${clusterIdStore}/theme/details?theme_name=${themeName}`}
            >
              {themeName}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>指标</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="theme_title">指标</h2>
        <div className="theme_content">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="生产" key="1">
              <ThemeIndicatorProduction />
            </TabPane>
            <TabPane tab="消费" key="2">
              <ThemeIndicatorConsume />
            </TabPane>
            <TabPane tab="可用性" key="3">
              <ThemeIndicatorAvailability />
            </TabPane>
            <TabPane tab="消费者滞后" key="4">
              消费者滞后...
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  ThemeIndicator
);
