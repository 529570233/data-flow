import React, { Component } from "react";
import "./hideSetLayerStorageConfig.scss";
import { Card } from "antd";

import ViewConfig from "./viewConfig/viewConfig";
import EditConfig from "./editConfig/editConfig";

class HideSetLayerStorageConfig extends Component {
  state = {
    isEditConfig: false,
  };
  toggleConfig(editConfig) {
    this.setState(state => {
      return {
        isEditConfig: editConfig,
      };
    });
  }
  render() {
    let { isEditConfig } = this.state;
    let {
      first: { title: firstTitle, tip: firstTip },
      second: { title: secondTitle, tip: secondTip, list: secondList },
      third: { title: thirdTitle, tip: thirdTip, list: thirdList },
    } = this.props.data;

    return (
      <div className="hide_set_layer_storage_config">
        <div className="list">
          <h5>{firstTitle}</h5>
          {firstTip ? <p>{firstTip}</p> : null}
        </div>
        <div className="list">
          <h5>{secondTitle}</h5>
          {secondTip ? <p>{secondTip}</p> : null}
          {secondList ? (
            <Card style={{ width: 500 }}>
              {secondList.map(item => (
                <p key={item}>{item}</p>
              ))}
            </Card>
          ) : null}
        </div>
        <div className="list">
          <h5>{thirdTitle}</h5>
          {thirdTip ? <p>{thirdTip}</p> : null}
          {isEditConfig ? (
            <EditConfig toggleConfig={this.toggleConfig.bind(this)} />
          ) : (
            <ViewConfig
              list={thirdList}
              toggleConfig={this.toggleConfig.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HideSetLayerStorageConfig;
