import React, { Component } from "react";
import "./theme.scss";
import { Button, Table } from "antd";
import SearchInput from "../../../components/searchInput/searchInput";
import SwitchBtn from "../../../components/switchBtn/switchBtn";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    name: "主题1",
    copy_area: "0 of 1",
    async_follower: "0 of 1",
    async_observer: "0 of 1",
    production: "- -",
    consume: "- -"
  },
  {
    key: "2",
    name: "主题2",
    copy_area: "0 of 1",
    async_follower: "0 of 1",
    async_observer: "0 of 1",
    production: "0B",
    consume: "0B"
  },
  {
    key: "3",
    name: "主题3",
    copy_area: "0 of 5",
    async_follower: "0 of 5",
    async_observer: "0 of 0",
    production: "0B",
    consume: "0B"
  },
];

class Theme extends Component {
  render() {
    return (
      <>
        <h2 className="theme_title">所有主题</h2>
        <div className="theme_content">
          <div className="actions">
            <div className="search_box">
              <SearchInput placeholder="搜索集群名称或id" width={260} />
            </div>
            <div className="switch_box">
              <SwitchBtn label="隐藏内部主题"/>
            </div>
            <div className="add_theme_box">
              <Button type="primary" icon="plus">
                新增主题
              </Button>
            </div>
          </div>
          <Table dataSource={data} bordered>
            <Column title="主题名称" dataIndex="name" key="name" />
            <ColumnGroup title="有效性">
              <Column title="复制分区" dataIndex="copy_area" key="copy_area" />
              <Column
                title="非同步跟随者"
                dataIndex="async_follower"
                key="async_follower"
              />
              <Column
                title="非同步观察者"
                dataIndex="async_observer"
                key="async_observer"
              />
            </ColumnGroup>
            <ColumnGroup title="吞吐量">
              <Column
                title="字节/秒 生产"
                dataIndex="production"
                key="production"
              />
              <Column title="字节/秒 消费" dataIndex="consume" key="consume" />
            </ColumnGroup>
          </Table>
        </div>
      </>
    );
  }
}

export default Theme;
