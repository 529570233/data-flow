import React, { Component } from "react";
import "./storage.scss";
import { Form, Select, Button, Tabs, Collapse } from "antd";
import CheckBox from "../../../../components/checkBox/checkBox";
import HideSetLayerStorageConfig from "./hideSetLayerStorageConfig/hideSetLayerStorageConfig";

const { Option } = Select;
const { TabPane } = Tabs;
const { Panel } = Collapse;
class Storage extends Component {
  state = {
    selectSet: [
      {
        name: "clean",
        label: "清理策略",
        options: [
          { value: "jack", option: "Jack" },
          { value: "lucy", option: "Lucy" },
          { value: "tom", option: "Tom" },
        ],
      },
      {
        name: "time1",
        label: "保留时间",
        options: [
          { value: "jack", option: "Jack" },
          { value: "lucy", option: "Lucy" },
          { value: "tom", option: "Tom" },
        ],
      },
      {
        name: "time2",
        label: "保留时间",
        options: [
          { value: "jack", option: "Jack" },
          { value: "lucy", option: "Lucy" },
          { value: "tom", option: "Tom" },
        ],
      },
    ],
    GCSConfig: {
      first: {
        title: "1、创建GCS配置文件",
      },
      second: {
        title: "2、创建一个新的GCS bucket或使用一个现有的。",
        tip: "确保GCS bucket上允许读写器权限。",
      },
      third: {
        title: "3、将属性输入到服务器属性文件。",
        tip: "在下面的字段中输入值以生成属性配置并粘贴到服务器属性文件。",
        list: ["Card content1", "Card content2", "Card content3"],
      },
    },

    S3Config: {
      first: {
        title: "1、创建IAM访问密钥",
        tip: "了解有关管理IAM用户的访问密钥的详细信息。",
      },
      second: {
        title: "2、创建一个新的S3 bucket或使用一个现有的S3 bucket。",
        tip: "确保允许上面定义的IAM用户在此S3存储桶上执行以下操作：",
        list: ["Card content1", "Card content2", "Card content3"],
      },
      third: {
        title: "3、将属性输入到服务器属性文件。",
        tip: "在下面的字段中输入值以生成属性配置并粘贴到服务器属性文件。",
        list: ["Card content1", "Card content2", "Card content3"],
      },
    },
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  onChange(value) {
    console.log(`selected ${value}`);
  }

  callback(key) {
    console.log(key);
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    let { selectSet, GCSConfig, S3Config } = this.state;

    return (
      <div className="storage">
        <div className="agent_storage">
          <div className="header">
            <h3 className="title">代理存储</h3>
            <div className="toggle_config">
              <CheckBox label="显示原始配置" onChange={this.onChange} />
            </div>
          </div>
          <Form onSubmit={this.handleSubmit} className="select_set">
            {selectSet.map(item => {
              let { name, label, options } = item;
              return (
                <Form.Item label={label} key={name}>
                  {getFieldDecorator(name)(
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="请选择"
                      optionFilterProp="children"
                      onChange={this.onChange}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {options.map(val => {
                        let { value, option } = val;
                        return (
                          <Option value={value} key={value}>
                            {option}
                          </Option>
                        );
                      })}
                    </Select>
                  )}
                </Form.Item>
              );
            })}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="layer_storage">
          <h3 className="title">分层存储</h3>
          <p>此集群中当前已禁用。</p>
          <ul>
            <li>保留您的数据：您的数据层自动存储到对象。</li>
            <li>提高弹性：减少代理存储，使重新平衡和扩展更容易。</li>
            <li>省钱：分层数据的成本大大低于代理存储。</li>
          </ul>
        </div>
        <div className="hide_set_layer_storage">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header={<h3 className="title">隐藏设置分层存储</h3>} key="1">
              <p>选择要使用的后端（GCS或S3），然后执行以下步骤。</p>
              <Tabs onChange={this.callback} type="card">
                <TabPane tab="GCS" key="1">
                  <HideSetLayerStorageConfig data={GCSConfig} />
                </TabPane>
                <TabPane tab="S3" key="2">
                  <HideSetLayerStorageConfig data={S3Config} />
                </TabPane>
              </Tabs>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: "selectSet" })(Storage);
