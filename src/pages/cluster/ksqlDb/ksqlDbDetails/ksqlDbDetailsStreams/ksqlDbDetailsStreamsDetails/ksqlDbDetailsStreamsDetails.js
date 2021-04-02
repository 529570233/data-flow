import React, { Component } from "react";
import "./ksqlDbDetailsStreamsDetails.scss";
import { List, Row, Col, Table, Button, Modal, Form,Input } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
];
class KsqlDbDetailsStreamsDetails extends Component {
  state = {
    themeData: [
      { name: "key", value: "value" },
      { name: "key", value: "value" },
      { name: "key", value: "value" },
      { name: "key", value: "value" },
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
    this.setState({
      visible: true,
    });
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

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    let { themeData, tableData, visible, confirmLoading } = this.state;
    let {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div className="ksqlDb_details_streams_details">
        <Row>
          <Col span={10}>
            <div className="theme">
              <h3>主题</h3>
              <List
                size="small"
                dataSource={themeData}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <List.Item.Meta description={item.name} />
                    <div>{item.value}</div>
                  </List.Item>
                )}
              ></List>
            </div>
            <div className="framework">
              <h3>架构</h3>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                size="middle"
              />
            </div>
            <div className="action">
              <span className="query_stream_box">
                <Button type="primary">查询Stream</Button>
              </span>
              <span className="delete_stream_box">
                <Button type="primary" onClick={() => this.showModal()}>
                  删除Stream
                </Button>
                <Modal
                  title="删除stream"
                  visible={visible}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                  footer={
                    <>
                      <Button
                        type="default"
                        onClick={() => this.handleCancel()}
                      >
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
                      onSubmit={this.handleSubmit}
                      className="delete_stream"
                    >
                      <Form.Item label="stream名称">
                        {getFieldDecorator("ksqlDB_cluster")(
                          <Input
                            placeholder=""
                            style={{ width: "200px" }}
                          />
                        )}
                      </Form.Item>
                    </Form>
                  </div>
                </Modal>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create({ name: "deleteStream" })(KsqlDbDetailsStreamsDetails);
