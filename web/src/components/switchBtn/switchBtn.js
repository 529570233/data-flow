import React from "react";
import "./switchBtn.scss";
import { Switch, Icon } from "antd";

const SwitchBtn = props => {
  let { label } = props;
  return (
    <div className="switch_btn">
      <Switch
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        defaultChecked
      />
      <span className="switch_name">{label}</span>
    </div>
  );
};

export default SwitchBtn;
