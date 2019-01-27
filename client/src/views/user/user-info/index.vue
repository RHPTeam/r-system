<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-user-head :idRoute="userId"/>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import AppUserHead from "@/components/user/user-head";
export default {
  props: ["userId"],
  components: {
    AppUserHead
  }
};
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
</style>
