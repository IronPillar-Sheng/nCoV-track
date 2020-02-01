<template>
  <section class="app-main">
    <el-card class="tip">
      <div class="left">
        <div>
          因数据接口较为敏感，为避免不必要的恐慌，我们暂时不提供确诊及疑似患者活动数据的录入接口。
        </div>
        <div>
          仅当政府或防疫部门在实际使用时，我们会免费提供其余模块及接口，并提供全部的后续支持。
        </div>
      </div>
      <a href="https://github.com/ttaigithub/nCoV-track" class="github">
        GitHub
      </a>
    </el-card>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .fixed-header + .app-main {
    padding-top: 50px;
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      /*padding-right: 15px;*/
    }
  }

  .tip {
    position: relative;
    .left {
      color: darkred;
      text-align: center;
    }
    .github {
      position: absolute;
      right: 16px;
      top: 30px;
      color: #4491ED;
    }
  }
</style>
