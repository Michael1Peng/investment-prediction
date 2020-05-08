import React, {useEffect} from "react";
import cloneDeep from 'lodash/cloneDeep';
import echarts from 'echarts'
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

// 折线图的基本设置
// need to fill: title, xAxis.data, series[0].data, series[1].data
let baseOptions = {
  legend: {
    data: ['策略收益', '指数']
  },
  // 横轴显示日期
  xAxis: {
    type: 'category',
    name: '日期'
  },
  yAxis: {
    type: 'value',
    name: '%'
  },
  series: [
    {
      name: '策略收益',
      type: 'line'
    }, {
      name: '指数',
      type: 'line'
    }
  ]
}

function Chart({style, data, title}) {
  useEffect(() => {
    style = style || {width: '100%', height: 500};
    let {xData, seriesData} = data;

    let options = cloneDeep(baseOptions);
    options.title = {text: title};
    options.xAxis.data = xData;
    // 第一个数组是收益
    options.series[0].data = seriesData[0]
    // 第二个数组是指数
    options.series[1].data = seriesData[1]

    var myChart = echarts.init(document.getElementById('chart'));
    // 绘制图表
    myChart.setOption(options);
  }, [style, data, title])

  return <div id='chart' style={{width: '100%', height: 500}}/>
}

export default Chart
