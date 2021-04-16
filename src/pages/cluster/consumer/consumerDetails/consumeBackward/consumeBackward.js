import React, { Component } from "react";
import "./consumeBackward.scss";
import { Row, Col, Card, Statistic, Icon, Button, Table } from "antd";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import "@/utils/echarts";
import echartIcon from "@/assets/images/echart-position.png";

const { Column, ColumnGroup } = Table;
class ConsumeBackward extends Component {
  state = {
    echartData: [
      {
        title: "confluent-controlcenter-6-0-1-monitoring-message-rekey-store",
        subTitle: "最大滞后/消费者：5条信息",
        currentValue: 5,
        maxValue: 10,
      },
      {
        title:
          "confluent-controlcenter-6-0-1-metrics-trigger-measurement-rekey",
        subTitle: "最大滞后/消费者：231条信息",
        currentValue: 500,
        maxValue: 1000,
      },
      {
        title: "confluent-controlcenter-6-0-1-monitoring-trigger-event-rekey",
        subTitle: "最大滞后/消费者：231条信息",
        currentValue: 5,
        maxValue: 10,
      },
    ],
    tableData: [
      {
        key: "1",
        name: "agent1",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
      },
      {
        key: "2",
        name: "agent2",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
      },
      {
        key: "3",
        name: "agent3",
        copy_area: "0 of 5",
        async_follower: "0 of 5",
        async_observer: "0 of 0",
      },
    ],
  };
  getOption(opt) {
    let { title, subTitle, currentValue, maxValue } = opt;
    return {
      title: {
        text: title,
        textStyle: {
          fontSize: 14,
          color: "#646464",
          lineHeight: 18,
        },
        subtext: subTitle,
        subtextStyle: {
          fontSize: 12,
          color: "#646464",
        },
        top: 0,
        left: 0,
      },
      grid: {
        left: "0",
        right: "0",
        bottom: "20",
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
          max: maxValue,
          splitNumber: 2,
          offset: 18,
          axisLabel: {
            fontSize: 12,
            color: "#C4C4C4",
            width: 0,
            formatter: function (value) {
              if (value === 0) return "{zero|" + value + "}";
              else if (value === maxValue) return "{xAxisMax|" + value + "}";
              else return "{center|" + value + "}";
            },
            rich: {
              zero: {
                align: "left",
              },
              center: {
                align: "center",
              },
              xAxisMax: {
                align: "right",
              },
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#C4C4C4",
            },
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          data: ["data1"],
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: "bar",
          barWidth: 70,
          data: [currentValue],
          showBackground: true,
          backgroundStyle: {
            color: new echarts.graphic.LinearGradient(
              1,
              0,
              0,
              0,
              [
                {
                  offset: 0,
                  color: "#40AFFF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#E9F6FF", // 100% 处的颜色
                },
              ],
              false
            ),
          },
          itemStyle: {
            color: "rgba(0,0,0,0)",
          },
          label: {
            show: true,
            position: "insideTopRight",
            distance: 0,
            offset: [0, -6],
            align: "center",
            color: "rgba(0,0,0,0)",
            width: 20,
            height: 18,
            backgroundColor: {
              image: echartIcon,
            },
          },
        },
      ],
    };
  }

  render() {
    let { echartData, tableData } = this.state;
    return (
      <div className="consume_backward">
        <div className="set_warning">
          <Button type="dashed">设置警报</Button>
        </div>
        <Row gutter={16} style={{ marginBottom: "28px" }}>
          <Col span={12}>
            <Card>
              <Statistic
                title="消息总数"
                value="3,732"
                valueStyle={{ color: "#646464", fontSize: "30px" }}
                suffix={<Icon type="arrow-up" className="suffix_icon" />}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="5秒间隔"
                value="3,495"
                valueStyle={{ color: "#646464", fontSize: "30px" }}
                prefix={<Icon type="plus" className="prefix_icon" />}
                suffix={<Icon type="arrow-up" className="suffix_icon" />}
              />
            </Card>
          </Col>
        </Row>
        <ul className="chart_data">
          {echartData.map(item => (
            <li className="chart_data_item" key={item.title}>
              <ReactEChartsCore
                echarts={echarts}
                option={this.getOption.call(this, item)}
                notMerge={true}
                lazyUpdate={true}
                style={{ height: "160px" }}
              />
            </li>
          ))}
        </ul>
        <div className="consumer_table">
          <Table dataSource={tableData} bordered>
            <Column
              title="ksqlDB应用程序名称"
              dataIndex="name"
              align="center"
            />
            <ColumnGroup title="有效性">
              <Column align="center" title="复制分区" dataIndex="copy_area" />
              <Column
                align="center"
                title="非同步跟随者"
                dataIndex="async_follower"
              />
              <Column
                align="center"
                title="非同步观察者"
                dataIndex="async_observer"
              />
            </ColumnGroup>
          </Table>
        </div>
      </div>
    );
  }
}

export default ConsumeBackward;
