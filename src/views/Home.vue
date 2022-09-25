<template>
  <div class="home">
   <HeaderComp></HeaderComp>
   <MainComp></MainComp>
  </div>
</template>

<script>
// @ is an alias to /src
 import HeaderComp from '@/components/HeaderComp'
 import MainComp from '@/components/MainComp'
export default {
  name: "Home",
  components: {
    HeaderComp,
    MainComp
  }
};
</script>
<style lang="scss" scoped>
 ::v-deep .h2{
  color: #fff;
  height: .6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: .3rem;
  font-weight: 500;
 }
 ::v-deep .echarts{
  height: 2.4rem;
 }
 ::v-deep .el-loading-mask {
  background-color: rgba(255,255,255, 0.02);
 }
</style>
