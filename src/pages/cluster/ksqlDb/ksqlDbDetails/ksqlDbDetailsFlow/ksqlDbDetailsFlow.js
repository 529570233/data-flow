import React, { Component } from "react";
import "./ksqlDbDetailsFlow.scss";
import { Card, Row, Col, Drawer, Tabs, Tree } from "antd";
import SearchInput from "../../../../../components/searchInput/searchInput";

const { TabPane } = Tabs;
const { TreeNode } = Tree;
class KsqlDbDetailsFlow extends Component {
  state = {
    cards: [
      { id: 1, title: "title1", tip: "card content1" },
      { id: 2, title: "title2", tip: "card content2" },
      { id: 3, title: "title3", tip: "card content3" },
    ],
    flowDrawerData: [
      { name: "key1", value: "value1" },
      { name: "key2", value: "value2" },
      { name: "key3", value: "value3" },
      { name: "key4", value: "value4" },
    ],
    treeData: [
      {
        title: "0-0",
        key: "0-0",
        children: [
          {
            title: "0-0-0",
            key: "0-0-0",
            children: [
              { title: "0-0-0-0", key: "0-0-0-0" },
              { title: "0-0-0-1", key: "0-0-0-1" },
              { title: "0-0-0-2", key: "0-0-0-2" },
            ],
          },
          {
            title: "0-0-1",
            key: "0-0-1",
            children: [
              { title: "0-0-1-0", key: "0-0-1-0" },
              { title: "0-0-1-1", key: "0-0-1-1" },
              { title: "0-0-1-2", key: "0-0-1-2" },
            ],
          },
          {
            title: "0-0-2",
            key: "0-0-2",
          },
        ],
      },
      {
        title: "0-1",
        key: "0-1",
        children: [
          { title: "0-1-0-0", key: "0-1-0-0" },
          { title: "0-1-0-1", key: "0-1-0-1" },
          { title: "0-1-0-2", key: "0-1-0-2" },
        ],
      },
      {
        title: "0-2",
        key: "0-2",
      },
    ],
    visible: false,
    selectedId: null,
  };
  showDrawer(id) {
    this.setState({
      visible: true,
      selectedId: id,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  callback(key) {
    console.log(key);
  }

  renderTreeNodes(data) {
    return data.map(item => {
      let { key, title, children } = item;
      if (children) {
        return (
          <TreeNode title={title} key={key} dataRef={item}>
            {this.renderTreeNodes(children)}
          </TreeNode>
        );
      }
      return <TreeNode key={key} {...item} />;
    });
  }

  render() {
    let { cards, flowDrawerData, treeData, selectedId } = this.state;
    if (selectedId !== null) {
      var { title: selectedItemTitle } = cards.filter(
        item => item.id === selectedId
      )[0];
    }
    return (
      <div className="ksqlDb_details_flow">
        <div className="search_input_box">
          <Row>
            <Col span={6}>
              <SearchInput placeholder="搜索" />
            </Col>
          </Row>
        </div>
        <div className="flow_content">
          <Row gutter={[16, 16]}>
            {cards.map(item => {
              let { id, title, tip } = item;
              return (
                <Col span={6} key={id}>
                  <Card
                    title={title}
                    bordered={false}
                    onClick={this.showDrawer.bind(this, id)}
                  >
                    {tip}
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div className="ksqlDb_details_flow_drawer">
              <h2>{selectedItemTitle}</h2>
              <div className="flow_drawer_data">
                {flowDrawerData.map(item => {
                  let { name, value } = item;
                  return (
                    <Row gutter={[20, 15]} key={name}>
                      <Col span={5}>{name}</Col>
                      <Col span={19}>{value}</Col>
                    </Row>
                  );
                })}
              </div>
              <div className="flow_drawer_tabs">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                  <TabPane tab="消息" key="1">
                    等待数据...
                  </TabPane>
                  <TabPane tab="架构" key="2">
                    <div className="flow_drawer_tree">
                      <Tree defaultExpandedKeys={["0-0-0", "0-0-1"]}>
                        {this.renderTreeNodes(treeData)}
                      </Tree>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default KsqlDbDetailsFlow;
