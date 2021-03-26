import React from "react";
import "./agentDefault.scss";
import { Button, List, Row, Col } from "antd";
import SwitchBtn from "../../../../components/switchBtn/switchBtn";
import CheckBox from "../../../../components/checkBox/checkBox";

const AgentDefault = props => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const data = [
    {
      title: "总则",
    },
    {
      title: "集团管理",
    },
    {
      title: "监听器",
    },
    {
      title: "日志",
    },
  ];
  let descriptionDom = (
    <ul className="description_list">
      <li className="item">
        <Row>
          <Col span={8}>
            <span className="name">name</span>
          </Col>
          <Col span={8}>
            <span className="val">value</span>
          </Col>
        </Row>
      </li>
    </ul>
  );
  return (
    <>
      <div className="action">
        <div className="switch_box">
          <SwitchBtn label="隐藏默认的设置" />
        </div>
        <div className="broker_id">
          <CheckBox label="broker.id 1" onChange={onChange} />
        </div>
        <div className="download_btn">
          <Button type="primary">下载</Button>
        </div>
        <div className="edit_btn">
          <Button type="primary">编辑设置</Button>
        </div>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={descriptionDom}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default AgentDefault;
