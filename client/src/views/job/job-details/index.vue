<template>
  <div class="page--wrapper">
    <div class="page--content">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_8 c_xl_8">
          <app-content/>
        </div>
        <div class="c_12 c_sm_12 c_md_4 c_xl_4 p_0">
          <app-aside/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppContent from "../job-details/components/content";
import AppAside from "../job-details/components/aside";
export default {
  components: {
    AppContent,
    AppAside
  }
};
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
</style>
