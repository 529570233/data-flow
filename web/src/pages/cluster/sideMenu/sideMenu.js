import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./sideMenu.scss";
import { Menu } from "antd";
import { connect } from "react-redux";

class SideMenu extends Component {
  state = {
    sidemenu: [
      {
        title: "概览",
        icon: "icon-common",
        link: "/overview",
      },
      {
        title: "代理",
        icon: "icon-broker",
        link: "/agent",
      },
      {
        title: "主题",
        icon: "icon-topic",
        link: "/theme",
      },
      {
        title: "连接",
        icon: "icon-connector",
        link: "/connection",
      },
      {
        title: "KSQL DB",
        icon: "icon-ksqldb",
        link: "/ksqlDb",
      },
      {
        title: "消费者",
        icon: "icon-customer",
        link: "/consumer",
      },
      {
        title: "集群设置",
        icon: "icon-setting",
        link: "/clusterSet",
      },
    ],
    currentLink: "/overview",
  };

  componentDidMount() {
    let {
        location: { pathname },
      } = this.props,
      reg = /\/.+?\/.+?(\/.[^/]+).*/g,
      regPathname = reg.exec(pathname);
    let currentLink = regPathname ? regPathname[1] : "/overview";
      console.log(currentLink)
    this.setState(() => ({
      currentLink,
    }));
  }

  render() {
    let { sidemenu, currentLink } = this.state,
      {
        match: { url },
        routerParam = { clusterIdStore: "" }, // 先赋默认值，因为cluster页面刷新时，由于异步请求接口，数据尚未保存到store中
      } = this.props;
    let { clusterIdStore } = routerParam;
    console.log(11111)
    return (
      <div className="side_menu">
        <Menu
          defaultSelectedKeys={[currentLink]}
          mode="inline"
          style={{ width: "100%", background: "none" }}
          key={currentLink + clusterIdStore} // 防止刷新页面时，选中项不重置
        >
          {sidemenu.map(item => {
            let { title, icon, link } = item;
            return (
              <Menu.Item
                key={link}
                // className={currentLink === link ? 'ant-menu-item-selected' : ''}
              >
                <NavLink to={url + link} exact>
                  <span className={`${icon} side_nav_icon`}></span>
                  {title}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  withRouter(SideMenu)
);
