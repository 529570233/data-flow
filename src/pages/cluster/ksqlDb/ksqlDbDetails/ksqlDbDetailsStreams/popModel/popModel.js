import React, { Component } from "react";
import "./popModel.scss";
import { Button, Modal, List, Icon } from "antd";
import SearchInput from "../../../../../../components/searchInput/searchInput";
import CheckBox from "../../../../../../components/checkBox/checkBox";

class PopModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.isVisible,
      confirmLoading: false,
      themeList: [
        { name: "key" },
        { name: "key" },
        { name: "key" },
        { name: "key" },
      ],
    };
  }

  shouldComponentUpdate() {
    this.setState(() => {
        return {
            visible: this.props.isVisible,
        }
    })
    return true;
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    // let { showModal } = this.props;
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    //   showModal(false);
    }, 2000);
  };
  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    let { visible, confirmLoading, themeList } = this.state;
    // let { isVisible } = this.props;
    console.log(this.props.isVisible)

    return (
      <Modal
        title="新建ksqlDB流"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        footer={
          <Button type="default" onClick={this.handleCancel}>
            取消
          </Button>
        }
      >
        <div className="add_stream_model">
          <div className="select_theme">
            <h4>选择包含流中所需数据的主题</h4>
            <p className="step">步骤1/2</p>
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
                <List.Item key={item.id}>
                  <List.Item.Meta description={item.name} />
                  <Icon type="right" />
                </List.Item>
              )}
            ></List>
          </div>
        </div>
      </Modal>
    );
  }
}

export default PopModel;
