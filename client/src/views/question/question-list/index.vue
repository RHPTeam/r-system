<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-info/>
        <app-content/>
      </div>
      <app-user-job/>
    </div>
  </div>
</template>

<script>
import AppInfo from "./components/info";
import AppContent from "./components/content";
import AppUserJob from "@/components/user/user-jobs";
export default {
  components: {
    AppInfo,
    AppContent,
    AppUserJob
  }
};
</script>

<style lang="scss"  scoped>
@import "./../../../assets/scss/rhelp/main-content";
@import "index";
</style>
