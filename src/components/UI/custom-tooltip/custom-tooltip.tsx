export const CustomTooltip = (ctx, initialArray) => {
  console.log(ctx);
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

    console.log('titleLines', titleLines);
    innerHtml += '<span class="tooltip-dayTitle">' + titleLines + "\, " + "Leads" + '</span>';

    console.log('bodyLines', bodyLines);
    console.log('labelColors', tooltipModel);
    const span = '<span class="tooltip-leadsNumber">' + bodyLines.lines[0] + '</span><span class="tooltip-dayOfWeek">' + initialArray.record.dates[ctx.tooltip.dataPoints[0].datasetIndex].dayOfWeek + '</span>';
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
  tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipEl.style.pointerEvents = 'none';

}