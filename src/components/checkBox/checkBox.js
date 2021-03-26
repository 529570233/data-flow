import React from "react";
import "./checkBox.scss";
import { Checkbox } from "antd";

const CheckBox = props => {
  let { label, onChange } = props;
  return <Checkbox onChange={onChange}>{label}</Checkbox>;
};

export default CheckBox;
