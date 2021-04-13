import React, { Component } from "react";
import "./addConnection.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Steps, Row, Col } from "antd";

const { Step } = Steps;
class AddConnection extends Component {
  state = {
    current: 0,
    stepsLeft: ["设置连接器", "测试与验证"],
    stepsRight: [
      "如何连接到您的数据",
      "公共",
      "变换",
      "属性词",
      "错误处理",
      "主题创建",
      "常规",
      "其他属性",
    ],
  };

  next() {
    this.setState(state => {
      return {
        current: state.current + 1,
      };
    });
  }

  done() {
    console.log("done");
  }

  prev() {
    this.setState(state => {
      return {
        current: state.current - 1,
      };
    });
  }

  render() {
    let {
        location: { pathname },
      } = this.props,
      connectionName = /\/cluster\/connection\/(.+)\/choose/.exec(pathname)[1];
    let { current, stepsLeft, stepsRight } = this.state;
    return (
      <div className="add_connection">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/connection">所有连接集群</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/connection/${connectionName}?connection_name=${connectionName}`}
            >
              {connectionName}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/cluster/connection/${connectionName}/choose`}>
              浏览
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>新建连接器</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="page_title">新建连接器</h2>

        <div className="connection_content">
          <Row gutter={150}>
            <Col span={13}>
              <div className="step_form">
                <Steps current={current}>
                  {stepsLeft.map(item => (
                    <Step key={item} title={item} />
                  ))}
                </Steps>
                <div className="steps-content">{stepsLeft[current]}</div>
                <div className="steps-action">
                  {current < stepsLeft.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      Next
                    </Button>
                  )}
                  {current === stepsLeft.length - 1 && (
                    <Button type="primary" onClick={() => this.done()}>
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{ marginLeft: 8 }}
                      onClick={() => this.prev()}
                    >
                      Previous
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col span={11}>
              <div className="step_process">
                <Steps progressDot current={1} direction="vertical">
                  {stepsRight.map(item => (
                    <Step title={item} key={item} />
                  ))}
                </Steps>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AddConnection;
