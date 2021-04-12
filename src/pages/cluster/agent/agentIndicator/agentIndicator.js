import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./agentIndicator.scss";
import qs from "qs";
import { Breadcrumb, Select, DatePicker, Col, Row, Card } from "antd";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridSimpleComponent,
  ToolboxComponent,
  TooltipComponent,
  TitleComponent,
  MarkPointComponent,
  MarkLineComponent,
} from "echarts/components";

echarts.use([
  LineChart,
  CanvasRenderer,
  GridSimpleComponent,
  TitleComponent,
  TooltipComponent,
  MarkLineComponent,
  ToolboxComponent,
  MarkPointComponent,
]);

const { Option } = Select;
const { RangePicker } = DatePicker;
class AgentIndicator extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  getOption = () => {
    return {
      title: {
        text: "未来一周气温变化",
        subtext: "纯属虚构",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["最高气温", "最低气温"],
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }],
          },
        },
        {
          name: "最低气温",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max",
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "最大值",
                  },
                  type: "max",
                  name: "最高点",
                },
              ],
            ],
          },
        },
      ],
    };
  };

  render() {
    let {
        location: { search },
      } = this.props,
      indicatorName = qs.parse(search.substring(1)).indicator_name;
    return (
      <div className="agent_indicator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/cluster/agent">代理概览</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{indicatorName}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="agent_indicator_title">{indicatorName}</h2>
        <div className="filter">
          <Row gutter={20}>
            <Col span={5}>
              <Select
                placeholder="选择代理"
                style={{ width: "100%" }}
                onChange={this.handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={7}>
              <RangePicker
                placeholder={["开始日期", "结束日期"]}
                style={{ width: "100%" }}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </div>
        <div className="chart_data">
          <Row gutter={[30, 20]}>
            <Col span={12}>
              <Card title="生产" bordered={false}>
                <ul className="chart_box">
                  <li className="chart_item">
                    <ReactEChartsCore
                      echarts={echarts}
                      option={this.getOption()}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </li>
                  <li className="chart_item">
                    <ReactEChartsCore
                      echarts={echarts}
                      option={this.getOption()}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </li>
                </ul>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="生产" bordered={false}>
                <ul className="chart_box">
                  <li className="chart_item">
                    <ReactEChartsCore
                      echarts={echarts}
                      option={this.getOption()}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </li>
                  <li className="chart_item">
                    <ReactEChartsCore
                      echarts={echarts}
                      option={this.getOption()}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AgentIndicator;
