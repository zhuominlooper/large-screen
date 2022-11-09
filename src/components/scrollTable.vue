<template>
  <div class="table-wrapper">
    <el-table :data="tableData" stripe class="swiper-page-table" ref="table" height="150px">
      <el-table-column prop="date" label="时间" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="140">
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="220">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  mounted () {
    this.tableScroll()
  },

  methods: {
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

// 表格内容(有用)
.table-wrapper ::v-deep .el-table__row {
  background: #1439391c !important;
  color: #46d4ff;
}
</style>