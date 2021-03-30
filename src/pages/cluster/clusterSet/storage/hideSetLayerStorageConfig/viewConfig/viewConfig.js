import React, { Component } from "react";
import "./viewConfig.scss";
import { Button, Card } from "antd";

class ViewConfig extends Component {
  render() {
    let { list, toggleConfig } = this.props;

    return (
      <div className="edit_config">
        <Card style={{ width: 500 }}>
          {list.map(item => (
            <p key={item}>{item}</p>
          ))}
        </Card>
        <Button
          type="primary"
          style={{ marginTop: "20px" }}
          onClick={() => toggleConfig(true)}
        >
          编辑配置
        </Button>
      </div>
    );
  }
}

export default ViewConfig;
