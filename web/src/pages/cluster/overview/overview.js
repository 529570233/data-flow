import React, { Component } from "react";
import "./overview.scss";
import { Card } from "antd";

class Overview extends Component {
  state = {
    overviewAgentData: null,
    overviewThemeData: null,
    overviewConnectionData: null,
    overviewKsqlData: null,
  };

  componentDidMount() {
    // axios
    //   .all([
    //     overviewAgent(),
    //     overviewTheme(),
    //     overviewConnection(),
    //     overviewKsql(),
    //   ])
    //   .then(
    //     axios.spread((resAgent, resTheme, resConnection, resKsql) => {
    //       this.setState(() => ({
    //         overviewAgentData: resAgent,
    //         overviewThemeData: resTheme,
    //         overviewConnectionData: resConnection,
    //         overviewKsqlData: resKsql,
    //       }));
    //     })
    //   );
  }

  render() {
    // let {
    //   overviewAgentData,
    //   overviewThemeData,
    //   overviewConnectionData,
    //   overviewKsqlData,
    // } = this.state;
    return (
      <div className="overview">
        <h2 className="overview_title">概览</h2>
        <div className="overview_content">
          <Card title="代理" bordered={false} style={{ width: "100%" }}>
            <ul className="card_data_list">
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
              <li className="item">content</li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default Overview;
