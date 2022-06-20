<template>
	<div id="main" class="main"></div>
</template>

<script>
import { onMounted } from 'vue'
import * as echarts from 'echarts' // 使用echarts
export default {
  setup() {
    onMounted(() => {
      var myChart = echarts.init(document.getElementById('main'))
      var option = {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
			type: 'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
		  {
			name: '价格',
			type: 'bar',
			data: [6, 7, 10, 12 ,20, 18],
		  }
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    })
  },
}
</script>

<style>
.main{
	margin-top: 200px;
	margin-left: 200px;
	height: 300px;
	width: 500px;
}

</style>
