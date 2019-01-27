<template>
  <div class="main--aside p_3">
    <app-head/>
    <div class="main--jobs">
      <app-item/>
      <app-item/>
      <app-item/>
      <app-item/>
    </div>
    <app-bot/>
  </div>
</template>
<script>
import AppHead from "./cp-aside/head";
import AppItem from "./cp-aside/items";
import AppBot from "./cp-aside/bot";
export default {
  components: {
    AppHead,
    AppItem,
    AppBot
  }
};
</script>
<style lang="scss" scoped>
</style>
