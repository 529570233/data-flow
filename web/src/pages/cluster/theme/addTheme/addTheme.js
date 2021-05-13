import React, { Component } from "react";
import "./addTheme.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Form, Input, Button, InputNumber } from "antd";
import { connect } from "react-redux";

class AddTheme extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    let {
      form: { getFieldDecorator },
      routerParam,
    } = this.props;
    return (
      <div className="add_theme">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${routerParam}/theme`}>所有主题</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>新增主题</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="theme_title">新增主题</h2>
        <Form onSubmit={this.handleSubmit} className="add_theme_form">
          <Form.Item label="主题名称">
            {getFieldDecorator("theme_name")(
              <Input placeholder="请输入主题名称" style={{ width: "300px" }} />
            )}
          </Form.Item>
          <Form.Item label="分区数量">
            {getFieldDecorator("part_num", {
              initialValue: 1,
            })(<InputNumber min={0} style={{ width: "300px" }} />)}
          </Form.Item>
          <Form.Item>
            <span className="default_config_btn">
              <Button type="primary" htmlType="submit">
                用默认配置新建
              </Button>
            </span>
            <span className="custom_set">
              <Button type="primary">自定义设置</Button>
            </span>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  Form.create({ name: "AddTheme" })(AddTheme)
);
