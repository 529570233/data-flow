import React, { Component } from "react";
import "./addStreamModel.scss";
import { Button, Modal, List, Icon, Form, Input, Select, Row, Col } from "antd";
import SearchInput from "@/components/searchInput/searchInput";
import CheckBox from "@/components/checkBox/checkBox";

const { Option } = Select;
class AddStreamModel extends Component {
  state = {
    confirmLoading: false,
    selectedItemId: null,
    step: 1,
    themeList: [
      { id: 1, themeName: "key1", theme: "theme1" },
      { id: 2, themeName: "key2", theme: "theme2" },
      { id: 3, themeName: "key3", theme: "theme3" },
      { id: 4, themeName: "key4", theme: "theme4" },
    ],
  };
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  nextStep(id) {
    this.setState(() => ({
      step: 2,
      selectedItemId: id,
    }));
  }
  previousStep() {
    this.setState(() => ({
      step: 1,
    }));
  }
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  renderFooterDom(step) {
    let { showModal } = this.props;
    if (step === 1)
      return (
        <Button type="default" onClick={() => showModal(false)}>
          取消
        </Button>
      );

    return (
      <>
        <Button type="default" onClick={() => this.previousStep()}>
          返回
        </Button>
        <Button type="primary" onClick={() => this.handleOk()}>保存</Button>
      </>
    );
  }

  render() {
    let { confirmLoading, step, selectedItemId, themeList } = this.state;
    let {
      isVisible,
      showModal,
      form: { getFieldDecorator },
    } = this.props;

    if (step === 2) {
      var { themeName, theme } = themeList.filter(
        item => item.id === selectedItemId
      )[0];
    }

    return (
      <Modal
        title="新建ksqlDB流"
        visible={isVisible}
        width={600}
        confirmLoading={confirmLoading}
        onCancel={() => showModal(false)}
        footer={this.renderFooterDom.call(this, step)}
      >
        <div className="add_stream_model">
          <h4>选择包含流中所需数据的主题</h4>
          <p className="step">步骤{step}/2</p>
          {step === 1 ? (
            <>
              <div className="select_theme">
                <div className="search_checkbox">
                  <div className="search_box">
                    <SearchInput placeholder="搜索" width={200} />
                  </div>
                  <div className="check_box">
                    <CheckBox label="显示内部主题" onChange={this.onChange} />
                  </div>
                </div>
              </div>
              <div className="themes">
                <List
                  size="small"
                  dataSource={themeList}
                  renderItem={item => (
                    <List.Item
                      key={item.id}
                      onClick={() => this.nextStep(item.id)}
                    >
                      <List.Item.Meta description={item.themeName} />
                      <Icon type="right" />
                    </List.Item>
                  )}
                ></List>
              </div>
            </>
          ) : (
            <div className="second_step">
              <Row>
                <Col span={16}>
                  <Form
                    onSubmit={this.handleSubmit}
                    className="second_step_form"
                  >
                    <Row>
                      <Col span={24}>
                        <Form.Item label="ksqlDB集群">
                          {getFieldDecorator("ksqlDB_cluster", {
                            initialValue: themeName,
                          })(
                            <Input
                              placeholder=""
                              disabled
                              style={{ width: "100%" }}
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={12}>
                        <Form.Item label="主题">
                          {getFieldDecorator("theme", {
                            initialValue: theme,
                          })(
                            <Input
                              placeholder=""
                              disabled
                              style={{ width: "100%" }}
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="流名称">
                          {getFieldDecorator("stream_name")(
                            <Input
                              placeholder="default_ksql_proc"
                              style={{ width: "100%" }}
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={12}>
                        <Form.Item label="查询类型">
                          {getFieldDecorator("query_type")(
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
                      </Col>
                      <Col span={12}>
                        <Form.Item label="值格式">
                          {getFieldDecorator("value_format")(
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
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={12}>
                        <Form.Item label="关键列">
                          {getFieldDecorator("key_column")(
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
                      </Col>
                      <Col span={12}>
                        <Form.Item label="时间戳">
                          {getFieldDecorator("time_stamp")(
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
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col span={8}>
                  <div className="query_existing_stream">
                    <h4 className="query_existing_stream_title">查询现有流</h4>
                    <ul className="existing_stream">
                      <li className="existing_stream_item">
                        KSQL_PROCESSING_LOG
                      </li>
                      <li className="existing_stream_item">
                        KSQL_PROCESSING_LOG
                      </li>
                      <li className="existing_stream_item">
                        KSQL_PROCESSING_LOG
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

export default Form.create({ name: "addStreamModel" })(AddStreamModel);
