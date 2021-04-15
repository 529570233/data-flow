import React, { Component } from "react";
import "./setConnection.scss";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Row,
  Col,
  Button,
  Modal,
  Icon,
} from "antd";

const { Option } = Select;
class SetConnection extends Component {
  state = {
    otherProps: [],
    otherPropsName: "3333",
    visible: false,
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }

  showModal() {
    this.setState(() => ({
      visible: true,
    }));
  }

  changeValue(e) {
    let otherPropsName = e.target.value; // setState传函数参时，必须先用变量接收e.target.value
    this.setState(() => ({
      otherPropsName,
    }));
  }

  handleOk() {
    this.setState(state => {
      let { otherProps, otherPropsName } = state;
      otherProps.push(otherPropsName);
      return {
        otherProps: otherProps,
        visible: false,
      };
    });
  }

  handleCancel() {
    this.setState(() => ({
      visible: false,
    }));
  }
  addOtherProps() {
    this.setState(state => {
      state.otherProps.push(`otherProps${state.otherPropsNum + 1}`);
      return {
        otherPropsNum: state.otherPropsNum + 1,
        otherProps: state.otherProps,
      };
    });
  }
  removeOtherProps(otherProps) {
    this.setState(state => {
      let newOtherProps = state.otherProps.filter(item => item !== otherProps);
      return {
        otherProps: newOtherProps,
      };
    });
  }
  mapOtherProps() {
    let { otherProps } = this.state;
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <>
        {otherProps.map(item => (
          <Form.Item label={item} key={item}>
            {getFieldDecorator(item)(
              <Input className="other_props_input" placeholder="" />
            )}
            <Icon
              className="remove_other_props"
              type="delete"
              onClick={() => this.removeOtherProps(item)}
            />
          </Form.Item>
        ))}
      </>
    );
  }
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    let { visible, otherPropsName, otherProps } = this.state;
    return (
      <div className="set_connection">
        <Form onSubmit={() => this.handleSubmit()} className="edit_config">
          <Form.Item label="连接器类">
            {getFieldDecorator("connection")(<Input placeholder="" />)}
          </Form.Item>
          <Form.Item label="名称">
            {getFieldDecorator("name")(<Input placeholder="" />)}
          </Form.Item>

          <h3 className="form_group_title">公共</h3>
          <Form.Item label="最大任务数">
            {getFieldDecorator("max_task")(<Input placeholder="" />)}
          </Form.Item>
          <Form.Item label="标题转换器类">
            {getFieldDecorator("title_converter")(
              <Select
                showSearch
                placeholder="请选择"
                optionFilterProp="children"
                onChange={this.onChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="yes">true</Option>
                <Option value="no">false</Option>
              </Select>
            )}
          </Form.Item>

          <h3 className="form_group_title">变换</h3>
          <Form.Item label="变换">
            {getFieldDecorator("transform")(<Input placeholder="" />)}
          </Form.Item>

          <h3 className="form_group_title">属性词</h3>
          <Form.Item label="属性词">
            {getFieldDecorator("props")(<Input placeholder="" />)}
          </Form.Item>

          <h3 className="form_group_title">错误处理</h3>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item label="错误重试超时">
                {getFieldDecorator("error_retry")(
                  <InputNumber
                    min={0}
                    placeholder="请输入数值"
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="错误重试之间的最大延迟">
                {getFieldDecorator("error_retry_delay")(
                  <InputNumber
                    min={0}
                    placeholder="请输入数值"
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="误差容限">
            {getFieldDecorator("error_limit")(<Input placeholder="" />)}
          </Form.Item>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item label="日志错误">
                {getFieldDecorator("log_error")(<Input placeholder="" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="日志错误详细信息">
                {getFieldDecorator("log_error_info")(<Input placeholder="" />)}
              </Form.Item>
            </Col>
          </Row>

          <div className="other_props">
            <h3 className="form_group_title other_props_title">其他属性</h3>
            <div className="add_props">
              <Button type="dashed" onClick={this.showModal.bind(this)}>
                添加属性
              </Button>
              <Modal
                title="添加属性"
                visible={visible}
                onCancel={() => this.handleCancel()}
                footer={
                  <>
                    <Button type="default" onClick={() => this.handleCancel()}>
                      取消
                    </Button>
                    <Button type="primary" onClick={() => this.handleOk()}>
                      确定
                    </Button>
                  </>
                }
              >
                <div className="add_props_model">
                  <label className="input_label">属性名称</label>
                  <Input
                    placeholder="请输入属性名"
                    value={otherPropsName}
                    onChange={this.changeValue.bind(this)}
                  />
                </div>
              </Modal>
            </div>
          </div>

          {otherProps.length > 0 ? (
            this.mapOtherProps.call(this)
          ) : (
            <p className="other_props_info">暂无其他属性。</p>
          )}
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "SetConnection" })(SetConnection);
