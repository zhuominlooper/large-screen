<template>
  <div class="left-main">
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">载客人数对比</h2>
      <div class="echarts" ref="echart0"></div>
      <div class="footer"></div>
    </div>
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">航班数量对比</h2>
      <div class="echarts" ref="echart1"></div>
      <div class="footer"></div>
    </div>
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">飞行距离分布</h2>
      <div class="echarts" ref="echart2"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { getLeftEchartsData } from '../api'
import * as echarts from 'echarts'
export default {
  name: 'LeftMainCompPage',
  data () {
    return {
      allData: [],
      isLoading: false,
    }
  },
  created () {
    this.isLoading = true
    getLeftEchartsData()
      .then((res) => {
        this.allData = res
        this.renderData()
      })
      .finally(() => {
        this.isLoading = false
      })
  },
  methods: {
    renderData () {
      this.allData.forEach((item, index) => {
        item.index = index
        this.renderEachts(item)
      })
    },
    renderEachts (data) {
      let chartDom = this.$refs[`echart${data.index}`]
      let myChart = echarts.init(chartDom)
      let option = {
        title: {
          text: '',
          show: false,
        },
        tooltip: data.tooltip,
        legend: data.legend,
        grid: {
          left: '6%',
          right: '6%',
          bottom: '6%',
          containLabel: true,
        },
        xAxis: {
          axisLabel: {
            color: '#fff',
          },
          splitLine: {
            show: false,
          },
          type: 'category',
          boundaryGap: true,
          data: data.xAxis,
        },
        yAxis: {
          axisLabel: {
            color: '#fff',
          },
          splitLine: {
            show: false,
          },
          type: 'value',
        },
        series: data.series,
      }
      option && myChart.setOption(option)
      //echarts自适应
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.left-main {
  display: flex;
  flex-direction: column;

  .panel {
    flex: 1;
    border: 1px solid rgba(25, 286, 239, 0.17);
    background-image: url('../assets/line(1).png');
    background-color: rgba(255, 255, 255, 0.05);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 0.2rem 0.5rem;
    margin-bottom: 0.2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .footer::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }

    .footer::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
  }
}
</style>
