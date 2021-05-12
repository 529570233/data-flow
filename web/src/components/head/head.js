import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./head.scss";
import { Menu, Affix } from "antd";
import { clusterMenu } from "@/api";
import { connect } from "react-redux";
import action from "@/store/action";

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    subMenu: [],
    selectedIndex: -1,
  };

  componentDidMount() {
    clusterMenu().then(res => {
      let { code, data } = res;
      if (code === 0) {
        this.setState(() => {
          if (Array.isArray(data)) {
            data.forEach(item => {
              item.link = `/cluster/${item.clusterId}`;
            });
            return {
              subMenu: data,
            };
          } else {
            console.error("后台返回的数据格式不正确，必须是数组！");
            return null;
          }
        });
      }
    });

    let { subMenu } = this.state,
      {
        location: { pathname },
        saveRouterParam,
      } = this.props;
    if (pathname.substring(0, 9) === "/cluster/") {
      let selectedIndex = subMenu.findIndex(item => {
        // 刷新浏览器时，保持url不变
        let selectd = pathname.includes(item.link);
        if (selectd) {
          saveRouterParam(item.clusterId);
        }
        return selectd;
      });
      console.log(selectedIndex);
      return { selectedIndex };
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { subMenu } = prevState,
      {
        location: { pathname },
      } = nextProps;
    if (pathname.substring(0, 9) === "/cluster/") {
      let selectedIndex = subMenu.findIndex(item => {
        // 刷新浏览器时，保持url不变
        return pathname.includes(item.link);
      });
      console.log(selectedIndex);
      return { selectedIndex };
    }
    // else if (pathname.substring(0, 9) === "/cluster/") {
    //   // 切换侧边栏时，保持选中项不变
    //   return null;
    // }
    return { selectedIndex: -1 };
  }

  selectNav(index, clusterId) {
    this.setState(() => ({
      selectedIndex: index,
    }));
    this.props.saveRouterParam(clusterId);
  }

  render() {
    let { subMenu, selectedIndex } = this.state;
    return (
      <Affix offsetTop={0}>
        <Menu mode="horizontal" className="head_nav">
          <Menu.Item key="logo" className="main_title">
            <NavLink to="/home" exact>
              <span>LOGO</span>
              <span style={{ fontSize: "22px" }}>流式数据引擎处理</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            popupClassName="cluster_drop_menu"
            title={
              <span className="submenu-title-wrapper">
                <span className="icon-cluster data_flow_icon"></span>
                <span>集群</span>
              </span>
            }
          >
            {subMenu.map((item, index) => {
              let { clusterId, clusterName, link } = item;
              return (
                <Menu.Item
                  key={clusterId}
                  onClick={this.selectNav.bind(this, index, clusterId)}
                >
                  <NavLink
                    to={link}
                    exact
                    className={selectedIndex === index ? "selected" : ""}
                  >
                    {clusterName}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </SubMenu>
          <Menu.Item key="username" style={{ float: "right" }}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-user data_flow_icon"></span>
              <span style={{ fontSize: "14px" }}>用户名</span>
            </a>
          </Menu.Item>
          <Menu.Item key="message" style={{ float: "right" }}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-warning data_flow_icon"></span>
              <span>消息</span>
            </a>
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

export default connect(null, action.routerParamAction)(withRouter(Header));
