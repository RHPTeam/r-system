<template>
  <div class="page--wrapper">
    <div class="page--content">
      <div class="r">
        <div class="c_md_8 c_12">
          <app-content />
        </div>
        <div class="c_md_4 c_12">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppContent from "./components/content";
export default {
  components: {
    AppContent
  }
};
</script>
<style lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
@import "index";
</style>
