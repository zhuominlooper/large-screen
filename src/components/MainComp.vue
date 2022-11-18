<template>
  <section class="section">
    <div class="column">
      <LeftMainCompPage></LeftMainCompPage>
    </div>
    <div class="column">
      <CenterMainCompPage></CenterMainCompPage>
    </div>
    <div class="column">
      <RightMainCompPage></RightMainCompPage>
    </div>
  </section>
</template>

<script>
import LeftMainCompPage from './LeftMainComp.vue'
import RightMainCompPage from './RightMainComp.vue'
import CenterMainCompPage from './CenterMainComp.vue'
export default {
  name: 'MainCompPage',
  components: {
    LeftMainCompPage,
    RightMainCompPage,
    CenterMainCompPage
  }
}
</script>

<style lang='scss' scoped>
.section {
  display: flex;
  margin: 0px .25rem;

  .column {
    flex: 3;
  }

  .column:nth-child(2) {
    flex: 7;
  }
}
</style>