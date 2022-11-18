<template>
  <div class="right-main">
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">签票成功率</h2>
      <div class="echarts" ref='view0'></div>
      <div class="footer"></div>
    </div>
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">飞行时间段</h2>
      <div class="echarts" ref='view1'></div>
      <div class="footer"></div>
    </div>
    <div class="panel" v-loading="isLoading">
      <h2 class="h2">交通载客比率</h2>
      <div class="echarts div-comp">
        <div ref='view2' style="flex:1"></div>
        <div ref='view3' style="flex:1"></div>
        <div ref='view4' style="flex:1"></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { getRightEchartsData } from '@/api'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
export default {
  name: 'LeftMainCompPage',
  data () {
    return {
      isLoading: false,
    }
  },
  created () {
    this.getAllData()
  },
  methods: {
    getAllData () {
      this.isLoading = true
      getRightEchartsData().then(res => {
        if (res) {
          res.forEach((item, index) => {
            this.renderEcharts(item, index)
          })
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    renderEcharts (item, index) {
      let chartDom = this.$refs[`view${index}`]
      let myChart = echarts.init(chartDom)
      myChart.setOption(item)
      //echarts自适应
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.right-main {
  display: flex;
  flex-direction: column;

  .div-comp {
    display: flex;
  }

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
