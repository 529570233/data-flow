import * as echarts from "echarts/core";
import { LineChart, BarChart } from "echarts/charts";
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
  BarChart,
  LineChart,
  CanvasRenderer,
  GridSimpleComponent,
  TitleComponent,
  TooltipComponent,
  MarkLineComponent,
  ToolboxComponent,
  MarkPointComponent,
]);
