import React, { Component } from "react";
import "./viewConfig.scss";
import { Button, Card } from "antd";

class ViewConfig extends Component {
  editConfig() {
    let { S3IsEditConfig } = this.state;
    if (S3IsEditConfig) return;
    this.setState(state => {
      return {
        S3IsEditConfig: true,
      };
    });
  }
  render() {
    let { list } = this.props;

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
          onClick={() => this.editConfig()}
        >
          编辑配置
        </Button>
      </div>
    );
  }
}

export default ViewConfig;
