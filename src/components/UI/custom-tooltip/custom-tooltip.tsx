import { ChartRes } from "@/types/chartRes";
import { BubbleDataPoint, Chart as ChartJS, ChartTypeRegistry, Point, TooltipModel } from "chart.js";

export const CustomTooltip = (ctx: {chart: ChartJS<keyof ChartTypeRegistry, ([number, number] | BubbleDataPoint | Point | null | number)[], unknown>, tooltip: TooltipModel<"line">}, initialArray: ChartRes) => {
  let tooltipEl = document.getElementById('chartjs-tooltip')
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    tooltipEl.innerHTML = '<div></div>';
    document.body.appendChild(tooltipEl)
  }

  const tooltipModel = ctx.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = '0';
    return;
  }

  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add('no-transform');
  }

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title[0] || [];
    const bodyLines = tooltipModel.body[0];

    let innerHtml = '<div class="tooltip-wrapper">';

    innerHtml += '<span class="tooltip-dayTitle">' + titleLines + "\, " + "Leads" + '</span>';
    let dayOfWeek = ''
    initialArray.record.dates.map((date)=>{
      if (date.date === ctx.tooltip.dataPoints[0].label) {
        dayOfWeek = date.dayOfWeek
      }
    })
    const span = '<span class="tooltip-leadsNumber">' + bodyLines.lines[0] + '</span><span class="tooltip-dayOfWeek">' + dayOfWeek + '</span>';
    innerHtml +=  span;
    innerHtml += '</div>';

    tooltipEl.innerHTML = innerHtml;
  }

  const position = ctx.chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1';
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.scrollX + tooltipModel.caretX + 'px';
  tooltipEl.style.top = position.top + window.scrollY + tooltipModel.caretY + 'px';
  tooltipEl.style.pointerEvents = 'none';

}