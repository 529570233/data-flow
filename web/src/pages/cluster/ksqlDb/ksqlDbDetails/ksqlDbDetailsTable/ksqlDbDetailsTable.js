import React, { Component } from "react";
import "./ksqlDbDetailsTable.scss";
import { Result, Button } from "antd";

class KsqlDbDetailsTable extends Component {
  render() {
    let randomNum = Math.random();
    return (
      <div className="ksqlDb_details_table">
        {randomNum >= 0.5 ? (
          <div className="table_content">数据列表</div>
        ) : (
          <div className="without_table">
            <Result
              status="warning"
              title="没有任何ksqlDB表"
              subTitle="表是一个流或另一个表的视图，表示可以对其运行查询的不断变化的事实的集合。
          表可以从kafka主题创建，也可以从现有的流和表派生。"
              extra={
                <Button type="primary" icon="plus">
                  添加表
                </Button>
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default KsqlDbDetailsTable;
