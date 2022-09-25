<template>
  <div class="left-main">
    <div class="panel">
      <h2 class="h2">柱状图</h2>
      <div class="echarts">11</div>
      <div class="footer"></div>
    </div>
    <div class="panel">
     <h2 class="h2">柱状图</h2>
      <div class="echarts">11</div>
      <div class="footer"></div>
    </div>
    <div class="panel">
     <h2 class="h2">柱状图</h2>
      <div class="echarts">11</div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMainCompPage',
}
</script>

<style lang="scss" scoped>
.left-main {
  .panel {
    height: 3.25rem;
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
