<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-content/>
      </div>
      <app-user-job/>
    </div>
  </div>
</template>

<script>
import AppContent from "./components/content";
import AppUserJob from "@/components/user/user-jobs";
export default {
  components: {
    AppContent,
    AppUserJob
  }
};
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
</style>
