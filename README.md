# y-echart

A simple Vue.js plugin for echarts

## 安装

``` bash
mpm install y-echart
```

## 示例
```vue
<template>
  <div class="demo">
    <yEchart :optionData="option" />
  </div>
</template>

<script>
import yEchart from './y-echart'
export default {
  name: 'app',
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }]
      }
    }
  },
  components:{
    yEchart
  }
}
</script>

<style>
#demo {
  width:400px;
  height:400px
}
</style>
```
