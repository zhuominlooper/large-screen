<template>
  <div class="table-wrapper">
    <el-table :data="tableData" stripe class="swiper-page-table" ref="table" height="150px">
      <el-table-column prop="name" label="起飞城市">
      </el-table-column>
      <el-table-column prop="number" label="航班旅客数">
      </el-table-column>
      <el-table-column prop="time" label="飞行统计时间点" width="180">
      </el-table-column>
      <el-table-column prop="ticket" label="签票率">
      </el-table-column>
      <el-table-column prop="flightNum" label="航班数量">
      </el-table-column>
      <el-table-column prop="weather" label="天气状况">
      </el-table-column>
      <el-table-column prop="mileage" label="里程">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      name: ['青岛', '大连', '北京', '天津 ', '成都', '北京', '深圳', '上海', '温州', '昆明', '巴中', '虹口', '无锡', '石家庄', '沈阳', '烟台', '南京', '珠海', '宁波', '桂林', '长沙', '武汉', '南昌', '海口', '厦门'],
      tableData: []
    }
  },
  mounted () {
    this.name.forEach((key) => {
      this.tableData.push({
        name: key,
        number: this.rand(), //航班人数
        time: this.getRandTime(), //飞行时间段
        flightNum: this.flightRand(),//航班数量
        weather: this.getWeather(),//天气状况
        mileage: this.mileage(),//公里数
        ticket: this.ticket(), //签票成功率
      })
    })
    this.tableScroll()
  },

  methods: {
    ticket () {
      return Math.floor(Math.random() * (100 - 90)) + 90 + '%'
    },
    mileage () {
      return Math.floor(Math.random() * (200000 - 150000)) + 150000 + 'KM'
    },
    getWeather () {
      let randNum = Math.floor(Math.random() * 7) + 1
      switch (randNum) {
        case 1 || 7:
          return '晴天';
        case 2:
          return '阴天';
        case 3:
          return '大雾';
        case 4:
          return '小雨';
        case 5:
          return '大雨';
        case 6:
          return '冰雹';
        default:
          return '晴天'
      }

    },
    flightRand () {
      return Math.floor(Math.random() * (800 - 100)) + 100;
    },
    rand () {
      return Math.floor(Math.random() * (10000 - 1000)) + 1000;
    },
    getRandTime () {
      return moment(new Date().getTime() - Math.floor(Math.random() * (1000 * 60 * 60 * 12 - 10000)) + 10000).format('YYYY-MM-DD hh:mm:ss')
    },
    tableScroll () {
      const table = this.$refs.table;
      // 拿到表格中承载数据的div元素
      const divData = table.bodyWrapper;
      // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
      setInterval(() => {
        // 元素自增距离顶部1像素
        divData.scrollTop += 1;
        // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
        if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
          // 重置table距离顶部距离
          divData.scrollTop = 0;
        }
      }, 30);  // 滚动速度
    }
  }
}
</script>

<style lang="scss" scoped>
// 去除滚动的滚动条
::v-deep .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
}

.table-wrapper {
  margin: 8px;
}

//透明化整体
.table-wrapper ::v-deep .el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}

//透明化行、单元格,删除表头下横线
.table-wrapper ::v-deep tr,
.table-wrapper ::v-deep th,
.table-wrapper ::v-deep td {
  background: #1439391c !important;
  color: #fff;
  border-bottom: 0px !important; //删除表头下横线
}

//hover时样式
.table-wrapper ::v-deep .el-table tbody tr:hover>td {
  background-color: #367f7f78 !important
}
</style>