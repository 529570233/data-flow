import React, { Component } from "react";
import "./popup.scss";
import { Modal } from "antd";

class Popup extends Component {
  state = {
    visible: false,
    confirmLoading: false,
  };
  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
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
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };
  render() {
    let { visible, confirmLoading } = this.state;

    return (
      <div className="popup">
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>2222</p>
        </Modal>
      </div>
    );
  }
}

export default Popup;
