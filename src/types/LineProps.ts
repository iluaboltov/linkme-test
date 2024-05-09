import { ChartData, ChartOptions } from "chart.js";

export type LineProps = {
  data?: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}