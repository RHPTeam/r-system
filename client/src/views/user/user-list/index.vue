<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="r">
        <div class="c_md_8 c_12 main">
          <app-info/>
          <app-content/>
          <app-paginate/>
        </div>
        <div class="c_md_4 c_12">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInfo from "./components/info";
import AppContent from "./components/content";
import AppPaginate from "./components/paginate";

export default {
  components: {
    AppInfo,
    AppContent,
    AppPaginate
  }
};
</script>

<style lang="scss" scoped>
@import "./../../../assets/scss/rhelp/main-content";
@import "index";
</style>
