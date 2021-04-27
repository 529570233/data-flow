import React, { Component } from "react";
import "./ksqlDbDetailsStreamsDetails.scss";
import { Row, Col, Table, Button, Modal, Form, Input } from "antd";

const { Column } = Table;
class KsqlDbDetailsStreamsDetails extends Component {
  state = {
    themeData: [
      { name: "key1", value: "value1" },
      { name: "key2", value: "value2" },
      { name: "key3", value: "value3" },
      { name: "key4", value: "value4" },
    ],
    tableData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
      },
      {
        key: "2",
        name: "Jim Green",
        age: 32,
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
      },
    ],
    visible: false,
    confirmLoading: false,
  };

  showModal() {
    this.setState(() => ({
      visible: true,
    }));
  }

  handleOk() {
    this.setState(() => ({
      confirmLoading: true,
    }));
    setTimeout(() => {
      this.setState(() => ({
        visible: false,
        confirmLoading: false,
      }));
    }, 2000);
  }

  handleCancel() {
    this.setState(() => ({
      visible: false,
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }

  render() {
    let { themeData, tableData, visible, confirmLoading } = this.state;
    let {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div className="ksqlDb_details_streams_details">
        <div className="theme">
          <h3>主题</h3>
          <div className="theme_data">
            {themeData.map(item => {
              let { name, value } = item;
              return (
                <Row gutter={[20, 15]} key={name}>
                  <Col span={8}>{name}</Col>
                  <Col span={16}>{value}</Col>
                </Row>
              );
            })}
          </div>
        </div>
        <div className="framework">
          <h3>架构</h3>
          <Row>
            <Col span={12}>
              <Table dataSource={tableData} pagination={false} size="middle">
                <Column title="Name" dataIndex="name" />
                <Column title="Age" dataIndex="age" />
              </Table>
            </Col>
          </Row>
        </div>
        <div className="action">
          <span className="query_stream_box">
            <Button type="primary">查询Stream</Button>
          </span>
          <span className="delete_stream_box">
            <Button type="danger" onClick={() => this.showModal()}>
              删除Stream
            </Button>
            <Modal
              title="删除stream"
              visible={visible}
              confirmLoading={confirmLoading}
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
              <div className="delete_stream_model">
                <h5>确定要永久删除stream KSQL_PROCESSING_LOG？</h5>
                <Form
                  onSubmit={() => this.handleSubmit()}
                  className="delete_stream"
                >
                  <Form.Item label="stream名称">
                    {getFieldDecorator("ksqlDB_cluster")(
                      <Input placeholder="" style={{ width: "200px" }} />
                    )}
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </span>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: "ksqlDbDetailsStreamsDetails" })(
  KsqlDbDetailsStreamsDetails
);
