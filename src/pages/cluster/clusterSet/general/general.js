import React, { Component } from "react";
import "./general.scss";

import { Form, Input, Button } from "antd";

class General extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="general_form">
        <Form.Item label="集群名称：">
          {getFieldDecorator("cluster_name")(
            <Input
              placeholder="controlcenter.cluster"
              style={{ width: "300px" }}
            />
          )}
        </Form.Item>
        <Form.Item label="集群ID：">
          {getFieldDecorator("cluster_id")(
            <Input placeholder="3G4P5BW4SOIB5" style={{ width: "300px" }} />
          )}
        </Form.Item>
        <Form.Item label="主机：">
          {getFieldDecorator("host")(
            <Input placeholder="代理：29092" style={{ width: "300px" }} />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "general" })(General);
