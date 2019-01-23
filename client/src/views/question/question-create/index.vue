<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <div class="ct">
          <app-breadcrumb/>
          <app-content/>
        </div>
      </div>
      <app-user-job/>
    </div>
  </div>
</template>
<script>
import AppBreadcrumb from "@/components/breadcrumb/breadcrumb";
import AppContent from "./components/content";
import AppUserJob from "@/components/user/user-jobs";
export default {
  components: {
    AppContent,
    AppUserJob,
    AppBreadcrumb
  }
};
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
</style>
