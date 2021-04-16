import React, { Component } from "react";
import "./themeIndicatorProduction.scss";
import { Row, Col, DatePicker } from "antd";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import "@/utils/echarts";

const { RangePicker } = DatePicker;
class ThemeIndicatorProduction extends Component {
  getOption() {
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
  }

  render() {
    return (
      <div className="theme_indicator_production">
        <div className="date_select">
          <Row>
            <Col span={8}>
              <RangePicker
                placeholder={["开始日期", "结束日期"]}
                style={{ width: "100%" }}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </div>
        <div className="production_data">
          <ReactEChartsCore
            echarts={echarts}
            option={this.getOption.call(this)}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>
      </div>
    );
  }
}

export default ThemeIndicatorProduction;
