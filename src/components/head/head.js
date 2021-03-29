import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./head.scss";
import { Menu, Icon, Affix } from "antd";
const { SubMenu } = Menu;

class Header extends Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <Menu mode="horizontal" className="head">
          <Menu.Item key="logo">
            <NavLink to="/home" exact>
              <span className="icon-1">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
              </span>
              <span style={{ fontSize: "22px" }}>流式数据引擎处理</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                <span style={{ fontSize: "16px" }}>集群</span>
              </span>
            }
          >
            <Menu.Item key="cluster1">
              <NavLink to="/cluster">集群1</NavLink>
            </Menu.Item>
            <Menu.Item key="cluster2">
              <NavLink to="/cluster">集群2</NavLink>
            </Menu.Item>
            <Menu.Item key="cluster3">
              <NavLink to="/cluster">集群3</NavLink>
            </Menu.Item>
            <Menu.Item key="cluster4">
              <NavLink to="/cluster">集群4</NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="username" style={{ float: "right" }}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="setting" />
              <span style={{ fontSize: "14px" }}>用户名</span>
            </a>
          </Menu.Item>
          <Menu.Item key="message" style={{ float: "right" }}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="setting" />
            </a>
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

export default Header;
