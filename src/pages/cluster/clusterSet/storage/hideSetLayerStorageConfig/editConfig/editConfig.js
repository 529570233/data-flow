import React, { Component } from "react";
import "./editConfig.scss";
import { Form, Select, Button, Input } from "antd";

const { Option } = Select;

class EditConfig extends Component {
  viewConfig() {
    let { S3IsEditConfig } = this.state;
    if (!S3IsEditConfig) return;
    this.setState(state => {
      return {
        S3IsEditConfig: false,
      };
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="view_config">
        <Form.Item label="默认情况下启用主题分层">
          {getFieldDecorator("theme_layer")(
            <Select
              showSearch
              style={{ width: 300 }}
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
        <Form.Item label="分层存储S3存储桶">
          {getFieldDecorator("layer_storage_s3")(
            <Input placeholder="" style={{ width: "300px" }} />
          )}
        </Form.Item>
        <Form.Item label="分层存储GCS存储区域">
          {getFieldDecorator("layer_storage_gcs")(
            <Input placeholder="" style={{ width: "300px" }} />
          )}
        </Form.Item>
        <Form.Item label="AWS凭据文件路径">
          {getFieldDecorator("aws_file_path")(
            <Input placeholder="" style={{ width: "300px" }} />
          )}
        </Form.Item>
        <Form.Item style={{ marginTop: "20px" }}>
          <Button
            type="primary"
            style={{ marginRight: "20px" }}
            onClick={() => this.viewConfig()}
          >
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            生成配置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "editConfig" })(EditConfig);
