import React, { Component } from "react";
import "./ksqlDb.scss";

import { Table } from "antd";
import SearchInput from "../../../components/searchInput/searchInput";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    name: "主题1",
    copy_area: "0 of 1",
    async_follower: "0 of 1",
    async_observer: "0 of 1",
  },
  {
    key: "2",
    name: "主题2",
    copy_area: "0 of 1",
    async_follower: "0 of 1",
    async_observer: "0 of 1",
  },
  {
    key: "3",
    name: "主题3",
    copy_area: "0 of 5",
    async_follower: "0 of 5",
    async_observer: "0 of 0",
  },
];

class KsqlDb extends Component {
  render() {
    return (
      <>
        <h2 className="ksql_db_title">ksqlDB</h2>
        <div className="ksql_db_content">
          <SearchInput placeholder="搜索" width={260} />
          <Table dataSource={data} bordered style={{ marginTop: "30px" }}>
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
          </Table>
        </div>
      </>
    );
  }
}

export default KsqlDb;
