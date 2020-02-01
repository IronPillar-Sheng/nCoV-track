<template>
  <div class="app-container">
    <el-card class="body">
      导入电话号码（运营商数据），假设这些号码是已经确诊的人，然后根据时间点恢复过去他被传染期间的活动轨迹附近的其他用户。
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  .body {
    width: 300px;
    margin: 0 auto;
  }
</style>
